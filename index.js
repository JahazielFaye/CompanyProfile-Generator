const inquirer = require("inquirer");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const { generateHTML, dataTest} = require("./src/renderhtml");

// Object to store manager, interns and engineer
teamArray = [];

// function to start the prompt for user inputs
const start = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Welcome! Adding New Employee To The Team?",
        choices: ["Add Intern", "Add Engineer", "Done with Team Building!"],
        name: "newEmployee",
      },
      {
        type: "input",
        message: "Hi, First Please Enter your Teams Manager's Name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Please Enter Employee's ID: ",
        name: "id",
      },
      {
        type: "input",
        message: "Please Enter Employee's E-mail: ",
        name: "email",
      },
      {
        type: "input",
        message: "Please Enter Employee's Office Number: ",
        name: "officeNum",
      },
    ])
    .then((input) => {
        //create Manager object and store in employees
      let manager = new Manager(
        input.name,
        input.id,
        input.email,
        input.officeNum
      );
      teamArray.manager = manager;
      //call menuchoice with the user's selected option
      menuChoice(input.newEmployee);
    });
};

//Function to handle user choice to add employee or generate html
const menuChoice = (choice) => {
  console.log(choice);
  console.log(teamArray);
//Call the proper function based on the user's choice
  if (choice === "Add Intern") {
    addIntern();
  } else if (choice === "Add Engineer") {
    addEngineer();
  } else {
    generateHTML("index.html", dataTest);
  }
};

//Function to add intern employee
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Your Intern's Name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Enter Your Employee's ID: ",
        name: "id",
      },
      {
        type: "input",
        message: "Enter Your Employee's E-mail: ",
        name: "email",
      },
      {
        type: "input",
        message: "Enter Your Intern's School: ",
        name: "school",
      },
      {
        type: "list",
        message: "Add Another Employee?",
        choices: ["Add Intern", "Add Engineer", "Done"],
        name: "addnewEmployee",
      },
    ])
   
    .then((input) => {
      let intern = new Intern(input.name, input.id, input.email, input.school)
      teamArray.push(intern)
      menuChoice(input.addnewEmployee)
  });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Your Engineer's Name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Enter Your Employee's ID: ",
        name: "id",
      },
      {
        type: "input",
        message: "Enter Your Employee's E-mail: ",
        name: "email",
      },
      {
        type: "input",
        message: "Enter Your Employee's Github Profile: ",
        name: "github",
      },
    ])
    .then((input) => {
      let engineer = new Engineer(
        input.name,
        input.id,
        input.email,
        input.github
      )
      teamArray.push(engineer)
      menuChoice(input.addnewEmployee);
    });
};

start();