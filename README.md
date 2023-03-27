# ToNote

<p>ToNote or ParaAnotar in Portuguese - Br. Project developed in react.ts whose central objective is to manage school information,
allowing the user to add or delete information such as grades, absences and homework.</p>
<p>To try this project,<a href="https://to-note.vercel.app/"> click here</a>.</p>
<img src="https://github.com/rodrrigodev/ToNote/blob/main/src/assets/image-one.png?raw=true">

<h2>🖱️ Possible actions for users<h2>

<ul>
<li>Create new school subject 📚</li>
<li>Edit school subject ✏️</li>
<li>Delete school subject 🗑️</li>
<li>Add absences 🚩</li>
<li>Create homework 📖</li>
<li>Delete homework 🗑️</li>
<li>Mark and unmark homework as completed ❌✅</li>
<li>Search for homework 🔍</li>
<li>Filter homework by completed or pending ✅❌</li>
</ul>

<h2>⛔ Validations</h2>

<h3>Creating new school subject</h3>

<ol>
<li>It is not possible to create a new school subject without passing any data in the first field.</li>

<li>The save button will become available for clicking after a minimum of three characters is passed.</li>

<li>In the fields of school grades, only numbers from 0 to 10 are accepted, and the number 0 is considered null and it will not be 
considered as a real grade in the calculation of the final average.</li>
</ol>

<img src="https://github.com/rodrrigodev/ToNote/blob/main/src/assets/image-two.png?raw=true">

<h3>New homework</h3>

<ol>
<li>The school subject must be a minimum of 4 characters!</li>
<li>The subject must be a minimum of 4 characters!</li>
<li>The date must follow the pattern DD/MM/AAAA or DD MM AAAA!</li>
</ol>

<img src="https://github.com/rodrrigodev/ToNote/blob/main/src/assets/image-three.png?raw=true">

<h2>🛠 Tools used in project development:<h2>

<ul>
<li>dayjs 📅</li>
<li>date-fns 📅</li>
<li>phosphor-react ➕➕</li>
<li>radix-ui ➕➕</li>
<li>react-hook-form ✍️</li>
<li>react-toastify 🔔</li>
<li>styled-components 💅</li>
<li>uuid 🆔</li>
<li>zod 💎</li>
</ul>
