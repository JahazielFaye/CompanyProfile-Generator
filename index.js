const inquirer = require("inquirer");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const {TESTDATA, generateHTML} = require("./src/render")