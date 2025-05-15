const container = document.querySelector(".container")
const searchInput = document.querySelector(".searchInput")
const errorMessage = document.querySelector(".errorMessage")

 function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            const body = document.body
            menu.classList.toggle('open');
body.classList.toggle("overflowHidden")
        }

const nodeExpressConcepts = [
  {
    heading: "RESTful APIs",
    point: "RESTful APIs data ko standardized tariqe se serve karte hain, HTTP methods (GET, POST, PUT, DELETE) use karte hain.",
    code: `const express = require('express');\nconst app = express();\n\napp.get('/users', (req, res) => {\n  res.json([{ id: 1, name: 'Ali' }, { id: 2, name: 'Ahmed' }]);\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
    output: "Server run karega, /users par JSON response milega."
  },
  {
    heading: "Request Body",
    point: "Request body client se aane wale data ko handle karta hai, POST aur PUT methods ke sath use hota hai.",
    code: `const express = require('express');\nconst app = express();\napp.use(express.json());\n\napp.post('/user', (req, res) => {\n  console.log(req.body);\n  res.send('User created');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
    output: "Server console me request body print hogi."
  },
  {
    heading: "Response Headers",
    point: "Response headers server ke response ke sath metadata bhejte hain jaise content-type, status code.",
    code: `app.get('/', (req, res) => {\n  res.setHeader('X-Custom-Header', 'MyHeader');\n  res.send('Headers set');\n});`,
    output: "Response me custom header 'X-Custom-Header' set ho jayega."
  },
  {
    heading: "Routes",
    point: "Routes server ke different endpoints ko define karte hain jahan se client data fetch ya send kar sakta hai.",
    code: `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Home Page');\n});\n\napp.get('/about', (req, res) => {\n  res.send('About Page');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
    output: "'/' par 'Home Page' aur '/about' par 'About Page' show hota hai."
  },
  {
    heading: "Dynamic Routing for GET APIs",
    point: "Dynamic routing se hum parameters ke zariye flexible routes bana sakte hain jo real-time data handle karte hain.",
    code: `app.get('/users/:id', (req, res) => {\n  const userId = req.params.id;\n  res.send(\`User ID: \${userId}\`);\n});`,
    output: "User ID ke sath response milega jaise 'User ID: 123'."
  },
  {
    heading: "Query Params",
    point: "Query parameters se hum URL ke through additional data bhej sakte hain jo filtering ya searching ke liye use hota hai.",
    code: `app.get('/search', (req, res) => {\n  const query = req.query.q;\n  res.send(\`You searched for: \${query}\`);\n});`,
    output: "Jaise '/search?q=Node' par 'You searched for: Node' milega."
  },
  {
    heading: "Error Handling",
    point: "Error handling middleware se hum unexpected errors ko handle karte hain server crash hone se bachne ke liye.",
    code: `app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something went wrong!');\n});`,
    output: "Error console me print hogi aur 500 response milega."
  },
  {
    heading: "next() in Middleware",
    point: "next() middleware function ko control next middleware ya route handler ko pass karta hai.",
    code: `app.use((req, res, next) => {\n  console.log('Request received');\n  next();\n});\n\napp.get('/', (req, res) => {\n  res.send('Hello, World!');\n});`,
    output: "Console me 'Request received' print hoga, phir response milega."
  },
    {
    heading: "Express",
    point: "Express ek lightweight web framework hai jo Node.js ke liye fast, flexible, aur minimalist server banata hai.",
    code: `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello, Express!');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
    output: "Server run karega aur / par 'Hello, Express!' print hoga."
  },
  {
    heading: "CORS",
    point: "CORS cross-origin resource sharing allow karta hai taake client alag domain se server se data fetch kar sake.",
    code: `const express = require('express');\nconst cors = require('cors');\nconst app = express();\n\napp.use(cors());\napp.get('/', (req, res) => {\n  res.send('CORS enabled');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
    output: "Server me CORS enable ho jata hai."
  },
  {
    heading: "Mongoose",
    point: "Mongoose ek ODM (Object Data Modeling) library hai jo MongoDB ke documents ko JS objects me map karta hai.",
    code: `const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/testdb', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});`,
    output: "MongoDB se successfully connect ho jata hai."
  },
  {
    heading: "JWT",
    point: "JWT (JSON Web Token) secure authentication ke liye token-based approach provide karta hai.",
    code: `const jwt = require('jsonwebtoken');\n\nconst token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });\nconsole.log(token);`,
    output: "Generated JWT token console me print hota hai."
  },
  {
    heading: "bcrypt",
    point: "bcrypt password hashing ke liye use hota hai jo secure authentication ke liye zaroori hai.",
    code: `const bcrypt = require('bcrypt');\n\nasync function hashPassword(password) {\n  const hashed = await bcrypt.hash(password, 10);\n  console.log(hashed);\n}\n\nhashPassword('myPassword');`,
    output: "Encrypted password console me print hota hai."
  },
  {
    heading: "dotenv",
    point: "dotenv environment variables ko manage karne ke liye use hota hai jo sensitive data ko secure karta hai.",
    code: `require('dotenv').config();\nconsole.log(process.env.MY_SECRET);`,
    output: ".env file se MY_SECRET ki value print hoti hai."
  },
  {
    heading: "cron",
    point: "cron time-based jobs schedule karne ke liye use hota hai jo background tasks ke liye helpful hai.",
    code: `const cron = require('node-cron');\n\ncron.schedule('* * * * *', () => {\n  console.log('Running every minute');\n});`,
    output: "Har minute me 'Running every minute' print hota hai."
  },
  {
    heading: "nodemon",
    point: "nodemon server ko automatically restart karta hai jab file me koi changes kiye jaye.",
    code: `"scripts": {\n  "start": "nodemon server.js"\n}`,
    output: "Server har file change par auto-restart hota hai."
  },
  {
    heading: "Middleware",
    point: "Middleware ek function hai jo request aur response ke beech execute hota hai, jaise logging, authentication, ya data validation.",
    code: `const express = require('express');\nconst app = express();\n\n// Custom Middleware\napp.use((req, res, next) => {\n  console.log(\`Request URL: \${req.url}\`);\n  next();\n});\n\napp.get('/', (req, res) => {\n  res.send('Hello, Middleware!');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
    output: "Request URL console me print hota hai, phir response milta hai."
  },
  {
    heading: "HTTP Methods",
    point: "HTTP methods client-server communication ke liye use hote hain, jaise GET, POST, PUT, PATCH, DELETE.",
    code: `app.get('/', (req, res) => res.send('GET Request'));\napp.post('/', (req, res) => res.send('POST Request'));\napp.put('/', (req, res) => res.send('PUT Request'));\napp.delete('/', (req, res) => res.send('DELETE Request'));`,
    output: "Different methods ke according different messages milte hain."
  },
  {
    heading: "POST",
    point: "POST method server ko data bhejne ke liye use hota hai, mostly data create karne ke liye.",
    code: `app.post('/users', (req, res) => {\n  console.log(req.body);\n  res.send('User created');\n});`,
    output: "User data console me print hota hai."
  },
  {
    heading: "PUT",
    point: "PUT method existing data ko completely update karne ke liye use hota hai.",
    code: `app.put('/users/:id', (req, res) => {\n  res.send(\`User \${req.params.id} updated\`);\n});`,
    output: "User ID ke sath update message milega."
  },
  {
    heading: "PATCH",
    point: "PATCH method partially update karne ke liye use hota hai, yani sirf specific fields ko change karta hai.",
    code: `app.patch('/users/:id', (req, res) => {\n  res.send(\`User \${req.params.id} partially updated\`);\n});`,
    output: "User ID ke sath partial update message milega."
  },
  {
    heading: "DELETE",
    point: "DELETE method data ko server se permanently delete karne ke liye use hota hai.",
    code: `app.delete('/users/:id', (req, res) => {\n  res.send(\`User \${req.params.id} deleted\`);\n});`,
    output: "User ID ke sath delete message milega."
  },
  {
    heading: "Update",
    point: "Update data ko server me modify karne ke liye use hota hai, jo mostly PUT ya PATCH se hota hai.",
    code: `app.put('/users/:id', (req, res) => {\n  res.send(\`User \${req.params.id} updated\`);\n});`,
    output: "User ID ke sath update message milega."
  },

];


nodeExpressConcepts.forEach((concept)=> {
const card = document.createElement("div")
card.classList.add("card")
card.innerHTML = `
    <div class="heading"></div>
    <div class="paragraph"></div>
    <div class="code"></div>
    <div class="output">${concept.output}</div>
`;
card.querySelector(".heading").textContent = concept.heading;
card.querySelector(".paragraph").textContent = concept.point;
card.querySelector(".code").textContent = concept.code;
container.appendChild (card)
})


searchInput.addEventListener("input", ()=> {
  container.innerHTML = ""
let value = searchInput.value.trim()
const filteredTags = nodeExpressConcepts.filter((tag)=> {
  return (
tag.heading.includes(value) ||
tag.point.includes(value) ||
tag.code.includes(value)
)
})

const err = document.createElement("div")
err.classList.add("errorMessage")
err.innerHTML = "No matching topics found."

if (filteredTags.length > 0) {
  err.classList.add("hidden")
filteredTags.forEach((tag)=> {
const card = document.createElement("div")
card.classList.add("card")
card.innerHTML = `
    <div class="heading"></div>
    <div class="paragraph"></div>
    <div class="code"></div>
    <div class="output">${tag.output}</div>
`;
card.querySelector(".heading").textContent = tag.heading;
card.querySelector(".paragraph").textContent = tag.point;
card.querySelector(".code").textContent = tag.code;
container.appendChild (card)
})
} else {
container.appendChild(err)
}

})