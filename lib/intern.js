
const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        if(typeof school !== "string" || school.length < 2) {
            throw new Error("Expected to be a string")
        }
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}
 module.exports = Intern