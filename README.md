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

<p>It is not possible to create a new school subject without passing any data in the first field.</p>

<p>The save button will become available for clicking after a minimum of three characters is passed.</p>

<p>In the fields of school grades, only numbers from 0 to 10 are accepted, and the number 0 is considered null and it will not be 
considered as a real grade in the calculation of the final average.</p>

<img src="https://github.com/rodrrigodev/ToNote/blob/main/src/assets/image-two.png?raw=true">
