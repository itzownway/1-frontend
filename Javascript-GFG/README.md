<h1 align="center">📘 JavaScript Notes by GFG</h1>

<p align="center">
  <i>Curated JavaScript learning notes & syllabus organized topic-wise</i>
</p>

<hr/>

<h2>🧭 Syllabus Overview</h2>

<table>
<tr><th>Category</th><th>Topics</th></tr>

<tr>
<td><b>Basic of JavaScript (11)</b></td>
<td>
<ul>
<li>Introduction</li>
<li>Setup IDE - VS Code Installation</li>
<li>First program - Hello Geeks</li>
<li>JavaScript Variables</li>
<li>Difference between var, let and const</li>
<li>Data types - JS</li>
<li>Concatenation and Template Literal</li>
<li>Arithmatic Operators - JS</li>
<li>Type conversion</li>
<li>ReadlineSync</li>
</ul>
</td>
</tr>

<tr>
<td><b>JavaScript Fundamentals (16)</b></td>
<td>
<ul>
<li>Comparison Operators</li>
<li>Conditional Statements</li>
<li>Nested Conditional Statement</li>
<li>Ternary Operator (Part 1 & 2)</li>
<li>Logical Operators (Part 1–3)</li>
<li>Nullish Coalescing</li>
<li>Loops – for, while, nested, and exercises</li>
<li>Error Handling – try and catch</li>
</ul>
</td>
</tr>

<tr>
<td><b>Functional Programming (6)</b></td>
<td>
<ul>
<li>Function declaration</li>
<li>Anonymous Function & Function Expression</li>
<li>Return and undefined</li>
<li>Arrow Function</li>
<li>Function Exercise</li>
<li>Map and Set Collections</li>
</ul>
</td>
</tr>

<tr>
<td><b>String Methods (7)</b></td>
<td>
<ul>
<li>Iterating over String</li>
<li>charAt, charCodeAt</li>
<li>indexOf, includes</li>
<li>toUpperCase, toLowerCase</li>
<li>substring, trim</li>
</ul>
</td>
</tr>

<tr>
<td><b>Arrays (9)</b></td>
<td>
<ul>
<li>Iterating Over Array</li>
<li>Push, Pop, Splice</li>
<li>Concat, includes, sort</li>
<li>split and join</li>
<li>Spread & Destructuring</li>
</ul>
</td>
</tr>

<tr>
<td><b>Objects (14)</b></td>
<td>
<ul>
<li>Properties & Methods</li>
<li>Computed & Shorthand Properties</li>
<li>for..in loop</li>
<li>Object Reference & Shallow Copy</li>
<li>Optional Chaining</li>
<li>Destructuring</li>
<li>Keys, values & entries</li>
<li>this keyword</li>
<li>Constructor & Function Borrowing (Call, Apply, Bind)</li>
</ul>
</td>
</tr>

<tr>
<td><b>Modules (3)</b></td>
<td>
<ul>
<li>Introduction</li>
<li>Understanding Modules</li>
<li>Dynamic Imports</li>
</ul>
</td>
</tr>

<tr>
<td><b>Behind the Scenes (5)</b></td>
<td>
<ul>
<li>Execution Context</li>
<li>Call Stack</li>
<li>Hoisting (var, function, let, const, TDZ)</li>
</ul>
</td>
</tr>

<tr>
<td><b>Functions & Closures (12)</b></td>
<td>
<ul>
<li>Pure Functions</li>
<li>First Class Functions</li>
<li>Higher Order Functions</li>
<li>map, filter, reduce</li>
<li>Arguments Object, Rest Parameter</li>
<li>Scope, Scope Chain</li>
<li>Recursion</li>
<li>Closure</li>
</ul>
</td>
</tr>

<tr>
<td><b>Coding Drills, DOM, BOM, Projects, Polyfills, Async JS, Machine Coding</b></td>
<td>
<ul>
<li>Various exercises and projects (Quiz App, Wishlist App, Notes App, etc.)</li>
<li>DOM & BOM concepts</li>
<li>Polyfills (Map, Filter, Reduce, etc.)</li>
<li>Asynchronous JS (Callbacks, Promises, async/await)</li>
<li>Machine Coding (Stopwatch, Debounce, Modal, etc.)</li>
<li>Capstone & Advanced Projects</li>
</ul>
</td>
</tr>
</table>

<hr/>

<h2>📒 JavaScript Notes</h2>

<details open>
<summary><b>🔹 Variables</b></summary>

<ul>
<li>Used to store data or information.</li>
<li>Can be declared using <code>var</code>, <code>let</code>, or <code>const</code>.</li>
</ul>

<pre>
var message = "Hello"; // declaration + assign
var message = "Hi";    // re-declare allowed

let text = "By";
text = "Cool";         // re-assign allowed
let text = "Code";     // ❌ re-declare not allowed

const age = 90;        // cannot re-assign or re-declare
</pre>

<table>
<tr><th>Keyword</th><th>Declare</th><th>Assign</th><th>Re-declare</th></tr>
<tr><td>var</td><td>✔️</td><td>✔️</td><td>✔️</td></tr>
<tr><td>let</td><td>✔️</td><td>✔️</td><td>❌</td></tr>
<tr><td>const</td><td>✔️</td><td>❌</td><td>❌</td></tr>
</table>

<h4>Scope Types</h4>
<ul>
<li><b>Global Scope</b> – accessible anywhere.</li>
<li><b>Function Scope</b> – accessible inside the function only.</li>
<li><b>Block Scope</b> – accessible inside the block (for <code>let</code> & <code>const</code>).</li>
</ul>

</details>

<details>
<summary><b>🔹 Data Types</b></summary>

<h4>Primitive Types</h4>
<ul>
<li>String</li>
<li>Number</li>
<li>Boolean</li>
<li>Undefined</li>
<li>null</li>
<li>NaN</li>
</ul>

<h4>Non-Primitive</h4>
<ul>
<li>Object (includes arrays, functions, etc.)</li>
</ul>

</details>

<details>
<summary><b>🔹 Concatenation & Template Literals</b></summary>

<pre>
let name = "Sanjay";
let message = `Name is ${name}`;
</pre>
</details>

<details>
<summary><b>🔹 Operators</b></summary>

<ul>
<li>Arithmetic</li>
<li>Assignment</li>
<li>Comparison</li>
<li>Logical</li>
<li>Bitwise</li>
<li>String</li>
<li>Nullish Coalescing (<code>??</code>)</li>
</ul>

</details>

<details>
<summary><b>🔹 Type Conversion</b></summary>

<pre>
const a = "123";
const num = Number(a);
</pre>
</details>

<details>
<summary><b>🔹 ReadlineSync (CLI Input)</b></summary>

<pre>
const readlineSync = require("readline-sync");
const name = readlineSync.question("Enter your name: ");
</pre>
</details>

<details>
<summary><b>🔹 Error Handling</b></summary>

<pre>
try {
   // some code
} catch (e) {
   console.log(e);
} finally {
   // optional cleanup
}
</pre>
</details>

<details>
<summary><b>🔹 Functions</b></summary>

<ul>
<li>Normal Function</li>
<li>Anonymous Function</li>
<li>Function Expression</li>
<li>Arrow Function</li>
</ul>

<h4>Example:</h4>
<pre>
function greet(name) {
  return `Hello, ${name}`;
}
</pre>

<h4>Anonymous Function Example</h4>
<pre>
let sayHi = function() {
  console.log("Hi!");
};
</pre>

<h4>Pure Function</h4>
<pre>
function add(x, y) {
  return x + y;
}
</pre>
</details>

<hr/>

<h3 align="center">✨ Continue Learning – One Concept Every Day! ✨</h3>
