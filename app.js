const container = document.querySelector(".container")

 function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            const body = document.body
            menu.classList.toggle('open');
body.classList.toggle("overflowHidden")
        }

const htmlTags = [
  {
    heading: "<html>",
    point: "HTML ka main root tag hai jo poori document ko define karta hai.",
    code: "<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>",
    output: "<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>"
  },
  {
    heading: "<head>",
    point: "Document ka meta data, title aur style define karne ke liye use hota hai.",
    code: "<head>\n  <title>My Page</title>\n  <meta charset='UTF-8'>\n</head>",
    output: "<head>\n  <title>My Page</title>\n  <meta charset='UTF-8'>\n</head>"
  },
  {
    heading: "<title>",
    point: "Page ka title set karne ke liye jo browser tab me dikhai deta hai.",
    code: "<title>My Website</title>",
    output: "My Website (Browser Tab Title)"
  },
  {
    heading: "<body>",
    point: "Document ka main content yahan likha jata hai jo user ko dikhta hai.",
    code: "<body>\n  <h1>Welcome</h1>\n  <p>This is my website.</p>\n</body>",
    output: "<h1>Welcome</h1>\n<p>This is my website.</p>"
  },
  {
    heading: "<h1> to <h6>",
    point: "Heading tags jo content ko importance ke hisaab se define karte hain.",
    code: "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h6>Heading 6</h6>",
    output: "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h6>Heading 6</h6>"
  },
  {
    heading: "<p>",
    point: "Paragraph likhne ke liye use hota hai.",
    code: "<p>This is a paragraph.</p>",
    output: "<p>This is a paragraph.</p>"
  },
  {
    heading: "<a>",
    point: "Link banane ke liye use hota hai jo kisi dusre page par le jata hai.",
    code: "<a href='https://example.com'>Visit Website</a>",
    output: "<a href='https://example.com'>Visit Website</a>"
  },
  {
    heading: "<img>",
    point: "Image insert karne ke liye use hota hai.",
    code: "<img src='image.jpg' alt='Description' />",
    output: "<img src='image.jpg' alt='Description' />"
  },
  {
    heading: "<ul> and <li>",
    point: "Unordered list banane ke liye use hota hai.",
    code: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
    output: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>"
  },
  {
    heading: "<ol> and <li>",
    point: "Ordered list banane ke liye use hota hai.",
    code: "<ol>\n  <li>First Item</li>\n  <li>Second Item</li>\n</ol>",
    output: "<ol>\n  <li>First Item</li>\n  <li>Second Item</li>\n</ol>"
  },
  {
    heading: "<div>",
    point: "Block level container jo layout banane ke liye use hota hai.",
    code: "<div>\n  <h2>Section Title</h2>\n  <p>Some content</p>\n</div>",
    output: "<div>\n  <h2>Section Title</h2>\n  <p>Some content</p>\n</div>"
  },
  {
    heading: "<span>",
    point: "Inline container jo text ya content ko style karne ke liye use hota hai.",
    code: "<span style='color: red;'>Important</span>",
    output: "<span style='color: red;'>Important</span>"
  },
  {
    heading: "<b>",
    point: "Text ko bold karne ke liye use hota hai.",
    code: "<b>Bold Text</b>",
    output: "<b>Bold Text</b>"
  },
  {
    heading: "<i>",
    point: "Text ko italic karne ke liye use hota hai.",
    code: "<i>Italic Text</i>",
    output: "<i>Italic Text</i>"
  },
  {
    heading: "<u>",
    point: "Text ko underline karne ke liye use hota hai.",
    code: "<u>Underlined Text</u>",
    output: "<u>Underlined Text</u>"
  },
  {
    heading: "<pre>",
    point: "Preformatted text dikhane ke liye use hota hai.",
    code: "<pre>\n  This is\n  preformatted\n  text.\n</pre>",
    output: "<pre>\n  This is\n  preformatted\n  text.\n</pre>"
  },
  {
    heading: "<iframe>",
    point: "Dusri website ya content ko embed karne ke liye use hota hai.",
    code: "<iframe src='https://example.com'></iframe>",
    output: "<iframe src='https://example.com'></iframe>"
  },
  {
    heading: "<br>",
    point: "Line break ya new line add karne ke liye use hota hai.",
    code: "<p>This is line 1.<br>This is line 2.</p>",
    output: "<p>This is line 1.\nThis is line 2.</p>"
  },
  {
    heading: "<table>",
    point: "Tabular data dikhane ke liye use hota hai.",
    code: "<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
    output: "<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>"
  },
  {
    heading: "<tr>",
    point: "Table row banane ke liye use hota hai.",
    code: "<tr>\n  <td>Row 1, Cell 1</td>\n  <td>Row 1, Cell 2</td>\n</tr>",
    output: "<tr>\n  <td>Row 1, Cell 1</td>\n  <td>Row 1, Cell 2</td>\n</tr>"
  },
  {
    heading: "<td>",
    point: "Table cell banane ke liye use hota hai.",
    code: "<td>Cell Data</td>",
    output: "<td>Cell Data</td>"
  },
  {
    heading: "<th>",
    point: "Table header cell banane ke liye use hota hai.",
    code: "<th>Header</th>",
    output: "<th>Header</th>"
  },
  {
    heading: "<section>",
    point: "Document ka section ya part banane ke liye use hota hai.",
    code: "<section>\n  <h2>About Us</h2>\n  <p>Information about the site.</p>\n</section>",
    output: "<section>\n  <h2>About Us</h2>\n  <p>Information about the site.</p>\n</section>"
  },
  {
    heading: "<main>",
    point: "Document ka main content wrap karne ke liye use hota hai.",
    code: "<main>\n  <h1>Main Content</h1>\n  <p>Page content goes here.</p>\n</main>",
    output: "<main>\n  <h1>Main Content</h1>\n  <p>Page content goes here.</p>\n</main>"
  },
  {
    heading: "<header>",
    point: "Document ya section ka header banane ke liye use hota hai.",
    code: "<header>\n  <h1>Website Title</h1>\n  <nav>Navigation</nav>\n</header>",
    output: "<header>\n  <h1>Website Title</h1>\n  <nav>Navigation</nav>\n</header>"
  },
  {
    heading: "<footer>",
    point: "Document ya section ka footer banane ke liye use hota hai.",
    code: "<footer>\n  <p>Copyright © 2025</p>\n</footer>",
    output: "<footer>\n  <p>Copyright © 2025</p>\n</footer>"
  },
  {
    heading: "<nav>",
    point: "Navigation links banane ke liye use hota hai.",
    code: "<nav>\n  <a href='#'>Home</a> | <a href='#'>About</a> | <a href='#'>Contact</a>\n</nav>",
    output: "<nav>\n  <a href='#'>Home</a> | <a href='#'>About</a> | <a href='#'>Contact</a>\n</nav>"
  },
  {
    heading: "<input>",
    point: "User se input lene ke liye use hota hai.",
    code: "<input type='text' placeholder='Enter your name'>",
    output: "<input type='text' placeholder='Enter your name'>"
  },
  {
    heading: "<form>",
    point: "User se data lene ke liye form banane ke liye use hota hai.",
    code: "<form>\n  <label>Name:</label>\n  <input type='text' />\n  <button type='submit'>Submit</button>\n</form>",
    output: "<form>\n  <label>Name:</label>\n  <input type='text' />\n  <button type='submit'>Submit</button>\n</form>"
  },
  {
    heading: "<label>",
    point: "Form elements ko label dene ke liye use hota hai.",
    code: "<label for='name'>Name:</label>\n<input type='text' id='name'>",
    output: "<label for='name'>Name:</label>\n<input type='text' id='name'>"
  },
  {
    heading: "<option>",
    point: "Dropdown ke options define karne ke liye use hota hai.",
    code: "<select>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>",
    output: "<select>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>"
  },
  {
    heading: "<select>",
    point: "Dropdown banane ke liye use hota hai.",
    code: "<select>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>",
    output: "<select>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>"
  },
  {
    heading: "<sub>",
    point: "Subscript text banane ke liye use hota hai.",
    code: "H<sub>2</sub>O",
    output: "H₂O"
  },
  {
    heading: "<sup>",
    point: "Superscript text banane ke liye use hota hai.",
    code: "x<sup>2</sup>",
    output: "x²"
  },
  {
    heading: "<video>",
    point: "Video file embed karne ke liye use hota hai.",
    code: "<video width='300' controls>\n  <source src='video.mp4' type='video/mp4'>\n  Your browser does not support the video tag.\n</video>",
    output: "<video width='300' controls>\n  <source src='video.mp4' type='video/mp4'>\n  Your browser does not support the video tag.\n</video>"
  }
];


htmlTags.forEach((tag)=> {
const card = document.createElement("div")
card.classList.add("card")
card.innerHTML = `
    <div class="heading"></div>
    <div class="paragraph"></div>
    <div class="code"></div>
    <div class="output">${tag.output}</div>
`;
card.querySelector(".heading").textContent = tag.heading;
card.querySelector(".paragraph").textContent = tag.paragraph;
card.querySelector(".code").textContent = tag.code;
container.appendChild (card)
})