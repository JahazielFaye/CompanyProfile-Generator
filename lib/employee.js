// Define the Employee class
class Employee {
    // Define the constructor for Employee
    constructor(name, id, email) {
        if (typeof name !== "string" || name.length < 2) {
            // Throw an error if the name is invalid
            throw new Error("Error: Please enter a valid name.");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Define a method to get the info of the Employee
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

// Export the Employee class
module.exports = Employee;
