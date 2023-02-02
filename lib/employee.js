class Employee {
    constructor(name, id, email) {
        if(typeof name !== "string" || name.length < 2) {
            throw new Error ("Error Please enter a valid name.");
        }
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee