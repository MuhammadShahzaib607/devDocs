const container = document.querySelector(".container")
const searchInput = document.querySelector(".searchInput")
const errorMessage = document.querySelector(".errorMessage")

 function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            const body = document.body
            menu.classList.toggle('open');
body.classList.toggle("overflowHidden")
        }

        const reactConcepts = [
  {
    heading: "Components",
    point: "React components chhote, reusable code blocks hain jo UI ka ek hissa represent karte hain.",
    code: `function Greeting() {\n  return <h1>Hello, World!</h1>;\n}\nexport default Greeting;`,
    output: "Hello, World!"
  },
  {
    heading: "import",
    point: "import se hum React components ya modules ko ek file se dusre file mein use kar sakte hain.",
    code: `import Greeting from './Greeting';\n\nfunction App() {\n  return <Greeting />;\n}\nexport default App;`,
    output: "Greeting component App component me use ho jata hai."
  },
  {
    heading: "export",
    point: "export se hum function, component ya variable ko dusri files me import kar sakte hain.",
    code: `export function greet() {\n  return 'Hello';\n}`,
    output: "Function 'greet' doosri file me import ho sakta hai."
  },
  {
    heading: "useState",
    point: "useState React ka hook hai jo state manage karta hai function components ke andar.",
    code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}\nexport default Counter;`,
    output: "Button click karne se count badhta hai."
  },
  {
    heading: "useEffect",
    point: "useEffect side effects (jaise API calls, timers) handle karta hai component ke lifecycle ke dauran.",
    code: `import { useEffect } from 'react';\n\nfunction App() {\n  useEffect(() => {\n    console.log('Component mounted');\n  }, []);\n  return <h1>Hello</h1>;\n}\nexport default App;`,
    output: "Console me 'Component mounted' print hota hai."
  },
  {
    heading: "React Fragment",
    point: "React Fragment multiple elements ko ek wrapper ke andar bina extra HTML tag ke group karta hai.",
    code: `function List() {\n  return (\n    <>\n      <li>Item 1</li>\n      <li>Item 2</li>\n    </>\n  );\n}\nexport default List;`,
    output: "Unordered list without extra wrapper tag."
  },
  {
    heading: "JSX",
    point: "JSX JavaScript ke andar HTML likhne ka tariqa hai, jo React components banata hai.",
    code: `function Greeting() {\n  return <h1>Hello, JSX!</h1>;\n}\nexport default Greeting;`,
    output: "Hello, JSX!"
  },
  {
    heading: "TSX",
    point: "TSX (TypeScript + JSX) TypeScript ka syntax hai jo JSX ke saath type safety provide karta hai.",
    code: `type Props = { name: string };\n\nfunction Greeting(props: Props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\nexport default Greeting;`,
    output: "Hello, [name]!"
  },
  {
    heading: "Props",
    point: "Props parent component se child component ko data pass karne ke liye use hote hain.",
    code: `function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default Greeting;`,
    output: "Hello, [name]!"
  },
  {
    heading: "Mapping",
    point: "Mapping array ke elements ko dynamically components me render karne ke liye use hota hai.",
    code: `function ItemList() {\n  const items = ['Apple', 'Banana', 'Orange'];\n  return (\n    <ul>\n      {items.map(item => <li key={item}>{item}</li>)}\n    </ul>\n  );\n}\nexport default ItemList;`,
    output: "Apple, Banana, Orange as a list."
  }
];

reactConcepts.forEach((concept)=> {
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
const filteredTags = reactConcepts.filter((tag)=> {
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