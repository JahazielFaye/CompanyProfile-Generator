const fs = require("fs");

const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");

data = {
    manager: new Manager("Mike Rain", 3, "mike@m.com", 765),
    interns: [
        new Intern("Faye Kieth", 423, "faye@m.com", "University of Cent"),
    ],
    engineers: [
        new Engineer("Marcus Mills", 231, "marcs@m.com", "github"),
    ],
};

function generateHTML(fileName, data) {
    let html = ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Astloch&family=Noto+Sans+TC:wght@400;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
        
    </head>
    <body>
    <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <div
        style="
            height: 1000px;
            background-color: purple;
            padding-top:50px;
            align-items: center;
        "
    >
    <div style="width: 1500px; height: auto; position: relative; margin: 0 auto;"></div>` ;
    
    html += '<div class="row row-cols-2 row-cols-md-4 g-4">'
    html = html + employeeHTML(data.manager);
    for(let intern of data.interns) {
        html += employeeHTML(intern)
    }
    for(let engineer of data.engineers) {
        html += employeeHTML(engineer)
    }
    html += '</div>'
    
html += "</div> </body><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js'></script></html>";
fs.writeFile(fileName, html, (err) =>
err ? console.error(err) : console.log("Your Index.html is created!"));
} 

function employeeHTML(employee) {
    let html = `
    <div class="col"><div class="card shadow p-3 mb-5 bg-body rounded"><div class="card-body">
    <h3 class="card-title">${employee.getName()}</h3>
    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
    <hr class="border border-primary border-2 opacity-50"></hr>
    <p class="card-text">
    <small class="text-muted">ID</small><br>
    ${employee.getId()}
    </p>
    <p class="card-text">
    <small class="text-muted">EMAIL</small><br>
    ${employee.getEmail()}
    </p>
    `;
    if (employee.getRole() === "Manager") {
        html += `<p class="card-text">
        <small class="text-muted">OFFICE</small><br>
        ${employee.officeNumber}
        </p>`;
 } else if (employee.getRole() === "Intern") {
    html += `<p class="card-text">
    <small class="text-muted">SCHOOL</small><br>
    ${employee.school}
    </p>`;
} else if (employee.getRole() === "Engineer") {
    html += `<p class="card-text">
    <small class="text-muted">GITHUB</small><br>
    ${employee.github}
    </p>`;
}
html += `</div></div></div>`;
return html;
}

module.exports = {generateHTML, data};