const Employee = require("./employee.js")

class Intern extends Employee {
    // constructor method to define the properties of Intern
    constructor(name, id, email, school) { 
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    // Method to return the role of Intern object
    getRole() {
        return "Intern"
    }
};

module.exports = Intern
