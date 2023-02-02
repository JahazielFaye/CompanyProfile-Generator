// Import the Employee class
const Employee = require("./employee.js");

// Define the Manager class that extends the Employee class
class Manager extends Employee {
    // Define the constructor for Manager
    constructor(name, id, email, officeNum) {
        // Call the parent class constructor
        super(name, id, email);
        this.officeNumber = officeNum;
    }

    // Override the getRole method of the parent class
    getRole() {
        return "Manager";
    }
}

// Export the Manager class
module.exports = Manager;
