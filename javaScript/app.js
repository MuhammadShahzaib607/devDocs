const container = document.querySelector(".container")

 function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            const body = document.body
            menu.classList.toggle('open');
body.classList.toggle("overflowHidden")
        }

const jsConcepts = [
    {
        heading: "var",
        point: "var aik aisa keyword hai jo variable ko function scope ya global scope deta hai.",
        code: "var name = 'Shahzaib';\nconsole.log(name);",
        output: "Shahzaib"
    },
    {
        heading: "let",
        point: "let block scope variable banata hai jo sirf us block ke andar accessible hota hai jahan declare hota hai.",
        code: "let age = 25;\nconsole.log(age);",
        output: "25"
    },
    {
        heading: "const",
        point: "const aik aisa variable hai jo ek dafa value set karne ke baad change nahi hota.",
        code: "const pi = 3.14;\nconsole.log(pi);",
        output: "3.14"
    },
    {
        heading: "Difference between var, let, and const keywords",
        point: "var function ya global scope deta hai, let aur const block scope. var aur let variable ki value change ho sakti hai, const nahi.",
        code: `// Example:\nvar a = 1;\nlet b = 2;\nconst c = 3;\n// a and b can be reassigned\n// c cannot be reassigned`,
        output: "a=1, b=2, c=3"
    },
    {
        heading: "data types",
        point: "JavaScript mein mukhtalif qisam ke data types hote hain jaise string, number, boolean, null, undefined, object, array.",
        code: `let str = "Hello";\nlet num = 100;\nlet flag = true;`,
        output: "str = Hello, num = 100, flag = true"
    },
    {
        heading: "Create a String with Multiple Spaces",
        point: "String mein multiple spaces create karne ke liye direct spaces likh sakte hain ya escape sequence use karte hain.",
        code: `let spacedStr = "Hello    World";\nconsole.log(spacedStr);`,
        output: "Hello    World"
    },
    {
        heading: "Multi-line Strings in JavaScript",
        point: "Template literals (backticks) se hum multi-line strings bana sakte hain.",
        code: "let multiLine = `Ye\nmulti-line\nstring hai.`;\nconsole.log(multiLine);",
        output: "Ye\nmulti-line\nstring hai."
    },
    {
        heading: "alert",
        point: "alert function se browser mein popup message show hota hai.",
        code: "alert('Hello Shahzaib!');",
        output: "Popup with message 'Hello Shahzaib!'"
    },
    {
        heading: "console",
        point: "console object se hum browser console mein messages print kar sakte hain, jaise debug karne ke liye.",
        code: "console.log('Hello from console');",
        output: "Hello from console (console mein)"
    },
    {
        heading: "array",
        point: "Array aik data structure hai jisme multiple values store kar sakte hain.",
        code: "let fruits = ['apple', 'banana', 'mango'];\nconsole.log(fruits);",
        output: "['apple', 'banana', 'mango']"
    },
    {
        heading: "how to use array ==>> write one example",
        point: "Array ko declare kar ke uske elements ko access karte hain index se.",
        code: `let colors = ['red', 'green', 'blue'];\nconsole.log(colors[1]); // green`,
        output: "green"
    },
    {
        heading: "destructured array",
        point: "Array destructuring se hum array ke elements ko variables mein seedha assign kar sakte hain.",
        code: `let [first, second] = ['a', 'b'];\nconsole.log(first, second);`,
        output: "a b"
    },
    {
        heading: "array powerful method for loop",
        point: "for loop se array ke har element ko iterate karte hain aur kaam karte hain.",
        code: `let arr = [1, 2, 3, 4];\nfor(let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}`,
        output: "1\n2\n3\n4"
    },
    {
        heading: "forEach",
        point: "forEach method se array ke har element pe function chala sakte hain, ye ek callback leta hai.",
        code: `let arr = ['a', 'b', 'c'];\narr.forEach(function(item) {\n  console.log(item);\n});`,
        output: "a\nb\nc"
    },
    {
        heading: "map",
        point: "map method array ke har element ko transform karta hai aur naya array return karta hai.",
        code: `let nums = [1, 2, 3];\nlet squares = nums.map(n => n * n);\nconsole.log(squares);`,
        output: "[1, 4, 9]"
    },
    {
        heading: "find",
        point: "find method array mein pehla element return karta hai jo condition match karta ho.",
        code: `let nums = [5, 12, 8, 130];\nlet found = nums.find(n => n > 10);\nconsole.log(found);`,
        output: "12"
    },
    {
        heading: "filter",
        point: "filter method array ke wo elements return karta hai jo condition satisfy karte hain, naya array banata hai.",
        code: `let nums = [5, 12, 8, 130];\nlet filtered = nums.filter(n => n > 10);\nconsole.log(filtered);`,
        output: "[12, 130]"
    },
    {
        heading: "reduce",
        point: "reduce method array ke sab elements ko ek single value mein convert karta hai, accumulator use karta hai.",
        code: `let nums = [1, 2, 3, 4];\nlet sum = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);`,
        output: "10"
    },
    ,
    {
        heading: "array method: push",
        point: "push method array ke end mein naya element add karta hai.",
        code: `let arr = [1, 2];\narr.push(3);\nconsole.log(arr);`,
        output: "[1, 2, 3]"
    },
    {
        heading: "array method: pop",
        point: "pop method array ke last element ko remove karta hai aur return karta hai.",
        code: `let arr = [1, 2, 3];\nlet removed = arr.pop();\nconsole.log(arr);\nconsole.log(removed);`,
        output: "[1, 2]\n3"
    },
    {
        heading: "array method: shift",
        point: "shift method array ke first element ko remove karta hai aur return karta hai.",
        code: `let arr = [1, 2, 3];\nlet removed = arr.shift();\nconsole.log(arr);\nconsole.log(removed);`,
        output: "[2, 3]\n1"
    },
    {
        heading: "array method: unshift",
        point: "unshift method array ke start mein naya element add karta hai.",
        code: `let arr = [2, 3];\narr.unshift(1);\nconsole.log(arr);`,
        output: "[1, 2, 3]"
    },
    {
        heading: "array method: slice",
        point: "slice method array ke ek part ko naya array bana ke return karta hai, original array change nahi hota.",
        code: `let arr = [1, 2, 3, 4];\nlet newArr = arr.slice(1, 3);\nconsole.log(newArr);`,
        output: "[2, 3]"
    },
    {
        heading: "array method: splice",
        point: "splice method array mein elements ko remove ya insert karta hai, original array change hota hai.",
        code: `let arr = [1, 2, 3, 4];\narr.splice(1, 2);\nconsole.log(arr);`,
        output: "[1, 4]"
    },
    {
        heading: "spread operator",
        point: "spread operator (...) se array ya object ke elements ko spread kar sakte hain ya copy bana sakte hain.",
        code: `let arr1 = [1, 2];\nlet arr2 = [...arr1, 3, 4];\nconsole.log(arr2);`,
        output: "[1, 2, 3, 4]"
    },
    {
        heading: "rest operator",
        point: "rest operator (...) se function ke arguments ko array mein capture kar sakte hain.",
        code: `function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3));`,
        output: "6"
    },
    {
        heading: "obj",
        point: "Object key-value pairs ka collection hota hai jisme hum data store karte hain.",
        code: `let person = {\n  name: 'Shahzaib',\n  age: 25\n};\nconsole.log(person);`,
        output: "{ name: 'Shahzaib', age: 25 }"
    },
    {
        heading: "how to remove any property in an obj",
        point: "delete operator se object ki property ko remove kar sakte hain.",
        code: `let obj = {a: 1, b: 2};\ndelete obj.b;\nconsole.log(obj);`,
        output: "{ a: 1 }"
    },
    {
        heading: "how to access property in an obj",
        point: "Dot notation ya bracket notation se object properties access karte hain.",
        code: `let obj = {name: 'Shahzaib'};\nconsole.log(obj.name);\nconsole.log(obj['name']);`,
        output: "Shahzaib\nShahzaib"
    },
    {
        heading: "destructured obj",
        point: "Object destructuring se properties ko variables mein direct assign kar sakte hain.",
        code: `let obj = {x: 10, y: 20};\nlet {x, y} = obj;\nconsole.log(x, y);`,
        output: "10 20"
    },
    {
        heading: "how to use obj ==>> write one example",
        point: "Object ko declare karke uske properties aur methods use kar sakte hain.",
        code: `let car = {\n  brand: 'Toyota',\n  start: function() { return 'Car started'; }\n};\nconsole.log(car.brand);\nconsole.log(car.start());`,
        output: "Toyota\nCar started"
    },
    {
        heading: "how to create function with function keyword",
        point: "function keyword se hum function define karte hain jo reusable code block hota hai.",
        code: `function greet() {\n  console.log('Hello!');\n}\ngreet();`,
        output: "Hello!"
    },
    {
        heading: "how to create arrow function",
        point: "Arrow function shorthand syntax hai function ke liye jo concise aur lexical this use karta hai.",
        code: `const greet = () => {\n  console.log('Hello!');\n};\ngreet();`,
        output: "Hello!"
    },
    {
        heading: "difference between arrow function and normal function",
        point: "Arrow function mein 'this' surrounding context ka hota hai, normal function mein apna this hota hai. Arrow function ka syntax chhota hota hai aur ye 'arguments' object nahi leta.",
        code: `// Normal function\nfunction normal() {\n  console.log(this);\n}\n// Arrow function\nconst arrow = () => {\n  console.log(this);\n};`,
        output: "Normal function ka this alag hota hai, arrow function ka this surrounding scope ka hota hai."
    },
    {
        heading: "how to call function ==>> write one example",
        point: "Function ko uska naam likh ke parentheses laga kar call karte hain.",
        code: `function sayHi() {\n  return 'Hi!';\n}\nconsole.log(sayHi());`,
        output: "Hi!"
    },
    {
        heading: "return",
        point: "return statement function se koi value wapas bhejne ke liye use hota hai.",
        code: `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));`,
        output: "5"
    },
    {
        heading: "by reference ka matlab kya hoota hai",
        point: "By reference ka matlab hota hai ke jab hum object ya array pass karte hain to uska address pass hota hai, isliye original data change ho sakta hai.",
        code: `let obj = {name: 'Shahzaib'};\nfunction changeName(o) {\n  o.name = 'Ali';\n}\nchangeName(obj);\nconsole.log(obj.name);`,
        output: "Ali"
    },
    {
        heading: "by value ka matlab kya hoota hai",
        point: "By value ka matlab hota hai ke jab hum primitive data types pass karte hain to unki copy pass hoti hai, asli value change nahi hoti.",
        code: `let x = 10;\nfunction change(num) {\n  num = 20;\n}\nchange(x);\nconsole.log(x);`,
        output: "10"
    },
    {
        heading: "call",
        point: "call method se hum function ko kisi specific object ke context mein call karte hain, arguments alag se pass karte hain.",
        code: `function greet(greeting) {\n  console.log(greeting + ', ' + this.name);\n}\nconst person = { name: 'Shahzaib' };\ngreet.call(person, 'Hello');`,
        output: "Hello, Shahzaib"
    },
    {
        heading: "bind",
        point: "bind method function ki copy banata hai jiska this specified object se bind hota hai, aur baad mein call kar sakte hain.",
        code: `function greet() {\n  console.log('Hello, ' + this.name);\n}\nconst person = { name: 'Ali' };\nconst greetAli = greet.bind(person);\ngreetAli();`,
        output: "Hello, Ali"
    },
    {
        heading: "apply",
        point: "apply method bhi call jaisa hai, farq ye hai ke arguments array ke form mein pass karte hain.",
        code: `function greet(greeting, punctuation) {\n  console.log(greeting + ', ' + this.name + punctuation);\n}\nconst person = { name: 'Sara' };\ngreet.apply(person, ['Hi', '!']);`,
        output: "Hi, Sara!"
    },
    {
        heading: "generator function",
        point: "Generator function special function hai jo execution pause aur resume kar sakta hai, ye function* syntax se banta hai.",
        code: `function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);`,
        output: "1\n2"
    },
    {
        heading: "callback function",
        point: "Callback function wo function hota hai jo dusre function ko argument ke taur par pass hota hai aur baad mein call hota hai.",
        code: `function greet(name, callback) {\n  console.log('Hello, ' + name);\n  callback();\n}\ngreet('Ali', () => { console.log('Callback called'); });`,
        output: "Hello, Ali\nCallback called"
    },
    {
        heading: "higherOrder function",
        point: "Higher-order function wo hota hai jo dusre function ko argument mein leta hai ya return karta hai.",
        code: `function repeat(n, action) {\n  for(let i = 0; i < n; i++) {\n    action(i);\n  }\n}\nrepeat(3, i => console.log(i));`,
        output: "0\n1\n2"
    },
    {
        heading: "constructor function",
        point: "Constructor function capital letter se start hota hai, new keyword se object banane ke liye use hota hai.",
        code: `function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nconst p = new Person('Zara', 22);\nconsole.log(p.name);\nconsole.log(p.age);`,
        output: "Zara\n22"
    },
    {
        heading: "Local Scope",
        point: "Local scope variable function ya block ke andar hota hai aur bahar access nahi hota.",
        code: `function test() {\n  let x = 10;\n  console.log(x);\n}\ntest();`,
        output: "10"
    },
    {
        heading: "Closures",
        point: "Closure ek function hai jo apni outer function ki variables ko yaad rakhta hai.",
        code: `function outer() {\n  let count = 0;\n  return function() {\n    count++;\n    console.log(count);\n  }\n}\nconst counter = outer();\ncounter();\ncounter();`,
        output: "1\n2"
    },
    {
        heading: "Global Scope",
        point: "Global scope variable pura script mein kahin bhi access ho sakta hai.",
        code: `let x = 20;\nfunction test() {\n  console.log(x);\n}\ntest();`,
        output: "20"
    },
    {
        heading: "Hoisting",
        point: "Hoisting mein variable aur function declarations upar move ho jate hain lekin initialization nahi.",
        code: `console.log(a); // undefined\nvar a = 5;`,
        output: "undefined"
    },
    {
        heading: "Math.random",
        point: "Math.random() 0 aur 1 ke beech random decimal number deta hai.",
        code: `console.log(Math.random());`,
        output: "0.483726347 (random number between 0 and 1)"
    },
    {
        heading: "Math.floor",
        point: "Math.floor() decimal number ko neeche ki taraf sabse kareeb integer mein convert karta hai.",
        code: `console.log(Math.floor(4.9));`,
        output: "4"
    },
    {
        heading: "Math.ceil",
        point: "Math.ceil() decimal number ko upar ki taraf sabse kareeb integer mein convert karta hai.",
        code: `console.log(Math.ceil(4.1));`,
        output: "5"
    },
    {
        heading: "new Date",
        point: "new Date() current date aur time ka object banata hai.",
        code: `const now = new Date();\nconsole.log(now);`,
        output: "2025-05-14T12:34:56.789Z (current date & time)"
    },
    {
        heading: "getDate()",
        point: "getDate() current date (1 se 31 tak) deta hai.",
        code: `const now = new Date();\nconsole.log(now.getDate());`,
        output: "14"
    },
    {
        heading: "getDay()",
        point: "getDay() week ka din number (0 = Sunday se 6 = Saturday tak) deta hai.",
        code: `const now = new Date();\nconsole.log(now.getDay());`,
        output: "3 (Wednesday, for example)"
    },
    {
        heading: "getMonth()",
        point: "getMonth() month ka number deta hai (0 = January se 11 = December tak).",
        code: `const now = new Date();\nconsole.log(now.getMonth());`,
        output: "4 (May, for example)"
    },
    {
        heading: "getFullYear()",
        point: "getFullYear() current saal ka 4-digit number deta hai.",
        code: `const now = new Date();\nconsole.log(now.getFullYear());`,
        output: "2025"
    },
    {
        heading: "setDate()",
        point: "setDate() date ko change karta hai object ke andar.",
        code: `const now = new Date();\nnow.setDate(1);\nconsole.log(now.getDate());`,
        output: "1"
    },
    {
        heading: "localStorage",
        point: "localStorage browser mein data permanent store karta hai jab tak user manually delete na kare.",
        code: `localStorage.setItem('name', 'Shahzaib');\nconsole.log(localStorage.getItem('name'));`,
        output: "Shahzaib"
    },
    {
        heading: "sessionStorage",
        point: "sessionStorage browser tab ke close hone tak data store karta hai, tab close hone par data delete ho jata hai.",
        code: `sessionStorage.setItem('sessionName', 'Ali');\nconsole.log(sessionStorage.getItem('sessionName'));`,
        output: "Ali"
    },
    {
        heading: "JSON.parse",
        point: "JSON.parse() string ko JavaScript object mein convert karta hai.",
        code: `const jsonStr = '{"name":"Shahzaib"}';\nconst obj = JSON.parse(jsonStr);\nconsole.log(obj.name);`,
        output: "Shahzaib"
    },
    {
        heading: "JSON.stringify",
        point: "JSON.stringify() JavaScript object ko string mein convert karta hai taake storage ya network par bheja ja sake.",
        code: `const obj = {name: 'Ali'};\nconst jsonStr = JSON.stringify(obj);\nconsole.log(jsonStr);`,
        output: '{"name":"Ali"}'
    },
    {
        heading: "Difference between Local Storage, Session Storage, and Cookies",
        point: "Local Storage permanent storage hai, sessionStorage tab band hone par data delete karta hai, cookies chhoti files hain jo server ke sath bhi exchange hoti hain aur expiration time hota hai.",
        code: `// Explanation only, koi code nahi`,
        output: "LocalStorage > Permanent\nSessionStorage > Tab close hone par delete\nCookies > Server ke sath bhi send hoti hain"
    },
    {
        heading: "JSON Web Token (JWT)",
        point: "JWT ek token hota hai jo user authentication ke liye secure info carry karta hai, jise server verify karta hai.",
        code: `// JWT example (conceptual)\nconst token = 'header.payload.signature';\nconsole.log('JWT token:', token);`,
        output: "JWT token: header.payload.signature"
    },
    {
        heading: "async",
        point: "async keyword function ko asynchronous banata hai jo promise return karta hai.",
        code: `async function greet() {\n  return 'Hello';\n}\ngreet().then(console.log);`,
        output: "Hello"
    },
    {
        heading: "await",
        point: "await keyword promise complete hone ka intezar karta hai bina code block ko block kiye.",
        code: `async function greet() {\n  const message = await Promise.resolve('Hello');\n  console.log(message);\n}\ngreet();`,
        output: "Hello"
    },
    {
        heading: "fetch API",
        point: "fetch API se hum network se data request kar sakte hain, ye promise return karta hai.",
        code: `fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(response => response.json())\n  .then(data => console.log(data));`,
        output: "{ userId: 1, id: 1, title: '...', body: '...' }"
    },
    {
        heading: ".then",
        point: ".then promise complete hone par callback function run karta hai.",
        code: `Promise.resolve('Done').then(result => console.log(result));`,
        output: "Done"
    },
    {
        heading: ".catch",
        point: ".catch promise reject hone par error handle karta hai.",
        code: `Promise.reject('Error').catch(err => console.log(err));`,
        output: "Error"
    },
    {
        heading: "try {} catch () {}",
        point: "try-catch block mein hum error ko handle karte hain bina program crash hue.",
        code: `try {\n  throw new Error('Oops!');\n} catch(e) {\n  console.log(e.message);\n}`,
        output: "Oops!"
    },
    {
        heading: "promise",
        point: "Promise asynchronous operation ka result future mein provide karta hai, do state hoti hain: resolve ya reject.",
        code: `const p = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Success'), 1000);\n});\np.then(console.log);`,
        output: "Success (1 second later)"
    },
    {
        heading: "promise resolve",
        point: "resolve promise successful completion ko indicate karta hai.",
        code: `Promise.resolve('Done').then(console.log);`,
        output: "Done"
    },
    {
        heading: "promise reject",
        point: "reject promise failure ko indicate karta hai, error handle karna zaroori hota hai.",
        code: `Promise.reject('Fail').catch(console.log);`,
        output: "Fail"
    },
    {
        heading: "XML",
        point: "XML ek markup language hai data store aur transport ke liye, jo structured aur human-readable hota hai.",
        code: `<note>\n  <to>Ali</to>\n  <from>Shahzaib</from>\n  <message>Hello</message>\n</note>`,
        output: "XML data example"
    },
    {
        heading: "JSON",
        point: "JSON JavaScript Object Notation hai lightweight data exchange format jo easy read/write hota hai.",
        code: `{\n  "to": "Ali",\n  "from": "Shahzaib",\n  "message": "Hello"\n}`,
        output: "JSON data example"
    },
    {
        heading: "JS Arithmetic Operators",
        point: "Arithmetic operators numbers ke darmiyan mathematical operations karte hain jaise +, -, *, /, %.",
        code: `let a = 5, b = 2;\nconsole.log(a + b); // Addition\nconsole.log(a - b); // Subtraction\nconsole.log(a * b); // Multiplication\nconsole.log(a / b); // Division\nconsole.log(a % b); // Modulus`,
        output: "7\n3\n10\n2.5\n1"
    },
    {
        heading: "JS Assignment Operators",
        point: "Assignment operators variable ko value assign karte hain, jaise =, +=, -=, *=, /=.",
        code: `let x = 10;\nx += 5; // x = x + 5\nconsole.log(x);`,
        output: "15"
    },
    {
        heading: "JS Comparison Operators",
        point: "Comparison operators do values ka muqabla karte hain aur true ya false return karte hain, jaise ==, ===, !=, !==, >, <.",
        code: `console.log(5 == '5'); // true\nconsole.log(5 === '5'); // false\nconsole.log(5 != 3); // true\nconsole.log(5 > 3); // true`,
        output: "true\nfalse\ntrue\ntrue"
    },
    {
        heading: "JS Logical Operators",
        point: "Logical operators conditions combine karte hain, jaise && (AND), || (OR), ! (NOT).",
        code: `console.log(true && false); // false\nconsole.log(true || false); // true\nconsole.log(!true); // false`,
        output: "false\ntrue\nfalse"
    },
    {
        heading: "JS Ternary Operator",
        point: "Ternary operator condition check kar ke do expressions me se ek return karta hai, syntax: condition ? expr1 : expr2",
        code: `let age = 18;\nlet canVote = (age >= 18) ? 'Yes' : 'No';\nconsole.log(canVote);`,
        output: "Yes"
    },
    {
        heading: "JS Bitwise Operators",
        point: "Bitwise operators numbers ke bits par operations karte hain, jaise &, |, ^, ~, <<, >>.",
        code: `console.log(5 & 1); // 1\nconsole.log(5 | 1); // 5\nconsole.log(5 ^ 1); // 4`,
        output: "1\n5\n4"
    },
    {
        heading: "JS typeof Operator",
        point: "typeof operator variable ya value ka data type batata hai.",
        code: `console.log(typeof 5); // number\nconsole.log(typeof 'hello'); // string\nconsole.log(typeof true); // boolean`,
        output: "number\nstring\nboolean"
    },
    {
        heading: "JS if-else",
        point: "if-else condition ke mutabiq code chalata hai agar condition true ho to if block warna else block.",
        code: `let age = 18;\nif(age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}`,
        output: "Adult"
    },
    {
        heading: "Switch Case in JS",
        point: "Switch case ek variable ke multiple values ko check karta hai aur matching case execute karta hai.",
        code: `let fruit = 'apple';\nswitch(fruit) {\n  case 'banana': console.log('Yellow'); break;\n  case 'apple': console.log('Red'); break;\n  default: console.log('Unknown');\n}`,
        output: "Red"
    },
    {
        heading: "Loops in JS",
        point: "Loops code ko baar baar chalane ke liye use hotay hain jab tak condition true ho.",
        code: `// General loop example\nfor(let i=0; i<3; i++) {\n  console.log(i);\n}`,
        output: "0\n1\n2"
    },
    {
        heading: "JS For Loop",
        point: "for loop ek variable ko initialize, condition check aur increment/decrement karta hai har iteration mein.",
        code: `for(let i = 0; i < 3; i++) {\n  console.log(i);\n}`,
        output: "0\n1\n2"
    },
    {
        heading: "JS While Loop",
        point: "while loop tab tak chalta hai jab tak condition true rahe.",
        code: `let i = 0;\nwhile(i < 3) {\n  console.log(i);\n  i++;\n}`,
        output: "0\n1\n2"
    },
    {
        heading: "JS for-in Loop",
        point: "for-in loop object ke properties par iterate karta hai.",
        code: `const obj = {a:1, b:2};\nfor(let key in obj) {\n  console.log(key + ': ' + obj[key]);\n}`,
        output: "a: 1\nb: 2"
    },
    {
        heading: "JS for…of Loop",
        point: "for-of loop iterable objects jaise arrays par iterate karta hai.",
        code: `const arr = [10, 20, 30];\nfor(let value of arr) {\n  console.log(value);\n}`,
        output: "10\n20\n30"
    },
    {
        heading: "JS do…while Loop",
        point: "do-while loop kam az kam ek dafa to chalega phir condition check karega.",
        code: `let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while(i < 3);`,
        output: "0\n1\n2"
    },
    {
        heading: "onclick",
        point: "onclick event tab chalta hai jab user kisi element ko click karta hai.",
        code: `<button onclick="alert('Button clicked!')">Click me</button>`,
        output: "Button clicked! (alert)"
    },
    {
        heading: "oninput",
        point: "oninput event tab chalta hai jab user input field mein koi value type karta hai.",
        code: `<input type="text" oninput="console.log(this.value)">`,
        output: "Typed value printed in console as user types"
    },
    {
        heading: "onchange",
        point: "onchange event tab chalta hai jab input field ki value change ho kar focus lose kare.",
        code: `<input type="text" onchange="console.log('Value changed')">`,
        output: "Value changed (in console when focus leaves after change)"
    },
    {
        heading: "onmouseover",
        point: "onmouseover event tab chalta hai jab mouse kisi element ke upar le jaye.",
        code: `<div onmouseover="console.log('Mouse over')">Hover me</div>`,
        output: "Mouse over (in console)"
    },
    {
        heading: "onmouseleave",
        point: "onmouseleave event tab chalta hai jab mouse element se bahar jata hai.",
        code: `<div onmouseleave="console.log('Mouse left')">Hover me</div>`,
        output: "Mouse left (in console)"
    },
    {
        heading: "onkeydown",
        point: "onkeydown event tab chalta hai jab keyboard ka koi key dabaya jata hai.",
        code: `<input type="text" onkeydown="console.log('Key down')">`,
        output: "Key down (in console)"
    },
    {
        heading: "onkeyup",
        point: "onkeyup event tab chalta hai jab keyboard ka koi key chhoda jata hai.",
        code: `<input type="text" onkeyup="console.log('Key up')">`,
        output: "Key up (in console)"
    },
    {
    heading: "DOM Manipulation",
    point: "DOM manipulation se hum webpage ke elements ko programmatically change kar sakte hain.",
    code: `// Example: Heading ka text change karna\ndocument.querySelector('h1').textContent = 'New Title';`,
    output: "Heading ka text 'New Title' ho jata hai."
  },
  {
    heading: "document.querySelector",
    point: "querySelector se hum CSS selector ke zariye pehla matching element select karte hain.",
    code: `const elem = document.querySelector('.myClass');\nconsole.log(elem);`,
    output: "Pehla element jiska class 'myClass' hai."
  },
  {
    heading: "document.querySelectorAll",
    point: "querySelectorAll se hum CSS selector ke zariye sab matching elements ko select karte hain NodeList ki form mein.",
    code: `const elems = document.querySelectorAll('p');\nelems.forEach(el => console.log(el.textContent));`,
    output: "Sab paragraph elements ke text print hote hain."
  },
  {
    heading: "document.getElementByClassName",
    point: "getElementsByClassName se hum class name ke basis par elements ka collection lete hain.",
    code: `const elems = document.getElementsByClassName('box');\nconsole.log(elems.length);`,
    output: "Class 'box' wale elements ki tadaad."
  },
  {
    heading: "document.getElementById",
    point: "getElementById se hum unique id wale element ko select karte hain.",
    code: `const elem = document.getElementById('main');\nconsole.log(elem);`,
    output: "ID 'main' wala element."
  },
  {
    heading: "document.createElement",
    point: "createElement se hum naya HTML element create kar sakte hain.",
    code: `const newDiv = document.createElement('div');\nnewDiv.textContent = 'Hello';\ndocument.body.appendChild(newDiv);`,
    output: "Page par ek naya div 'Hello' ke saath add ho jata hai."
  },
  {
    heading: "document.createAttribute",
    point: "createAttribute se hum naya attribute create karte hain jo baad mein element ko assign kar sakte hain.",
    code: `const attr = document.createAttribute('title');\nattr.value = 'Tooltip text';`,
    output: "Naya attribute 'title' ban gaya."
  },
  {
    heading: "document.setAttribute",
    point: "setAttribute se hum kisi element ko attribute aur uski value assign karte hain.",
    code: `const elem = document.querySelector('div');\nelem.setAttribute('id', 'newId');`,
    output: "Div element ka id 'newId' ho jata hai."
  },
  {
    heading: "document.classList.add",
    point: "classList.add se hum element mein nayi class add karte hain.",
    code: `const elem = document.querySelector('p');\nelem.classList.add('highlight');`,
    output: "Paragraph element ko 'highlight' class mil jati hai."
  },
  {
    heading: "document.classList.remove",
    point: "classList.remove se hum element se koi class hata sakte hain.",
    code: `const elem = document.querySelector('p');\nelem.classList.remove('highlight');`,
    output: "'highlight' class paragraph se remove ho jati hai."
  },
  {
    heading: "document.classList.toggle",
    point: "classList.toggle se hum class ko add ya remove karte hain agar wo pehle se hai ya nahi.",
    code: `const elem = document.querySelector('p');\nelem.classList.toggle('active');`,
    output: "'active' class add ho jati hai agar nahi thi, warna remove."
  }
];


jsConcepts.forEach((concept)=> {
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
