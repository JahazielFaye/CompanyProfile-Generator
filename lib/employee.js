// Define the Employee class
class Employee {
    // Define the constructor for Employee
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
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
        return this.title;
    }
}

// Export the Employee class
module.exports = Employee;
