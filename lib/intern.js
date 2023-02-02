const Employee = require("./employee.js");

class Intern extends Employee {
    // constructor method to define the properties of Intern
    constructor(name, id, email, school) {
        if(typeof school !== "string" || school.length < 2) {
            throw new Error("Expected school to be a string with length greater than or equal to 2");
        }
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
}

module.exports = Intern
