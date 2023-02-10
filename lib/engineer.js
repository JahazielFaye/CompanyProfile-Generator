const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Calling the parent class' constructor using super
        super(name, id, email)
        this.github = github;
        this.title = 'Engineer';
    }

    // Method to return the value of the github property
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

// Exporting the Engineer class for use in other files
module.exports = Engineer;
