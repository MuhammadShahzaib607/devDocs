const container = document.querySelector(".container")

 function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            const body = document.body
            menu.classList.toggle('open');
body.classList.toggle("overflowHidden")
        }

const cssProperties = [
  {
    property: "margin",
    point: "Element ke bahar ka space define karta hai.",
    code: "margin: 20px;",
    output: "Element ke 4 sides par 20px ka space add hoga."
  },
  {
    property: "padding",
    point: "Element ke andar ka space define karta hai.",
    code: "padding: 15px;",
    output: "Element ke content aur border ke beech 15px ka space add hoga."
  },
  {
    property: "font-family",
    point: "Element ke text ka font set karta hai.",
    code: "font-family: Arial, sans-serif;",
    output: "Text Arial font family me show hoga, agar available na ho to sans-serif use hoga."
  },
  {
    property: "font-size",
    point: "Text ka size define karta hai.",
    code: "font-size: 18px;",
    output: "Text 18px size me show hoga."
  },
  {
    property: "font-weight",
    point: "Text ka boldness set karta hai.",
    code: "font-weight: bold;",
    output: "Text bold hoga."
  },
  {
    property: "list-style",
    point: "Lists ke bullets ya numbers set karta hai.",
    code: "list-style: square;",
    output: "Unordered list items square bullets ke sath show honge."
  },
  {
    property: "text-transform",
    point: "Text ke case ko control karta hai.",
    code: "text-transform: uppercase;",
    output: "Text uppercase me show hoga."
  },
  {
    property: "display: flex",
    point: "Elements ko flex container me arrange karta hai.",
    code: "display: flex;",
    output: "Elements horizontally ya vertically align ho sakte hain."
  },
  {
    property: "justify-content",
    point: "Flex items ko main axis par align karta hai.",
    code: "justify-content: center;",
    output: "Items center align ho jate hain."
  },
  {
    property: "align-items",
    point: "Flex items ko cross axis par align karta hai.",
    code: "align-items: center;",
    output: "Items vertically center align ho jate hain."
  },
  {
    property: "align-self",
    point: "Specific flex item ka alignment set karta hai.",
    code: "align-self: flex-end;",
    output: "Single item bottom pe align ho jata hai."
  },
  {
    property: "display (grid)",
    point: "Grid container banata hai.",
    code: "display: grid;",
    output: "Element grid container ban jata hai jo rows aur columns me children ko arrange karta hai."
  },
  {
    property: "grid-template-rows",
    point: "Grid container ke rows ki height define karta hai.",
    code: "grid-template-rows: 100px 200px;",
    output: "Pehli row 100px aur doosri row 200px ki hogi."
  },
  {
    property: "grid-template-columns",
    point: "Grid container ke columns ki width define karta hai.",
    code: "grid-template-columns: 1fr 2fr;",
    output: "Pehla column 1 part aur doosra 2 parts ka hoga."
  },
  {
    property: "animation",
    point: "Elements me animations add karta hai.",
    code: `
      @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
      }
      animation: bounce 1s infinite;
    `,
    output: "Element continuously bounce karega."
  },
  {
    property: "border",
    point: "Element ka border set karta hai.",
    code: "border: 2px solid #333;",
    output: "2px thick, solid, black border add karta hai."
  },
  {
    property: "border-radius",
    point: "Element ke corners ko rounded banata hai.",
    code: "border-radius: 10px;",
    output: "Element ke 4 corners 10px rounded ho jate hain."
  },
  {
    property: "opacity",
    point: "Element ki transparency set karta hai.",
    code: "opacity: 0.5;",
    output: "Element 50% transparent ho jata hai."
  },
  {
    property: "hover",
    point: "Mouse pointer se element par hover effect deta hai.",
    code: `
      .button:hover {
        background-color: #444;
        color: #fff;
      }
    `,
    output: "Button ka background dark aur text white ho jayega on hover."
  },
  {
    property: "focus",
    point: "Form elements ka style change karta hai jab focus ho.",
    code: `
      input:focus {
        border-color: #00f;
        outline: none;
      }
    `,
    output: "Input field ka border blue ho jayega on focus."
  },
  {
    property: "transition",
    point: "Property ke changes ka duration set karta hai.",
    code: "transition: all 0.3s ease;",
    output: "All properties ke changes smoothly 0.3 seconds me honge."
  },
  {
    property: "position",
    point: "Element ke position behavior ko set karta hai.",
    code: "position: absolute;",
    output: "Element apne nearest positioned ancestor ke relative position me place hoga."
  },
  {
    property: "z-index",
    point: "Stack order set karta hai.",
    code: "z-index: 1000;",
    output: "Element stack me 1000 level pe hoga, dusre elements ke upar."
  },
  {
    property: "background-color",
    point: "Element ka background color set karta hai.",
    code: "background-color: #333;",
    output: "Element ka background dark gray hoga."
  },
  {
    property: "color",
    point: "Text ka color set karta hai.",
    code: "color: #fff;",
    output: "Text white color me show hoga."
  },
  {
    property: "box-shadow",
    point: "Element ke ird gird shadow add karta hai.",
    code: "box-shadow: 0 4px 10px rgba(0,0,0,0.2);",
    output: "Element ke 4px niche 10px ka light black shadow add hoga."
  },
  {
    property: "box-sizing",
    point: "Element ke width aur height ka calculation set karta hai.",
    code: "box-sizing: border-box;",
    output: "Padding aur border ko width me include karta hai."
  }
];



cssProperties.forEach((properties)=> {
const card = document.createElement("div")
card.classList.add("card")
card.innerHTML = `
    <div class="heading"></div>
    <div class="paragraph"></div>
    <div class="code"></div>
    <div class="output">${properties.output}</div>
`;
card.querySelector(".heading").textContent = properties.property;
card.querySelector(".paragraph").textContent = properties.point;
card.querySelector(".code").textContent = properties.code;
container.appendChild (card)
})