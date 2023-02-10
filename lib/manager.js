// Import the Employee class
const Employee = require("./employee.js");

// Define the Manager class that extends the Employee class
class Manager extends Employee {
    // Define the constructor for Manager
    constructor(name, id, email, officeNumber) {
        // Call the parent class constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }

    // Override the getRole method of the parent class
    getRole() {
        return "Manager";
    }
    getofficeNumber() {
        return this.getofficeNumber;
    }
}

// Export the Manager class
module.exports = Manager;
