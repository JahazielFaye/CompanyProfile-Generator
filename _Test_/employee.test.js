const Employee = require("../lib/employee")
const employee = new Employee("Faye", "7", "faye@email.com")

test("name function returns name", () => {
    expect(employee.getName()).toBe("Faye");
})

test("Id function returns Id", () => {
    expect(employee.getId().toBe("7"))
})

test("email function returns email", () => {
    expect(employee.getEmail()).toBe("faye@email.com");
})

test("get role function returns role", ()=> {
    expect(employee.getRole()).toBe("Employee");
})