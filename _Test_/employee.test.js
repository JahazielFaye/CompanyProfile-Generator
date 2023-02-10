const Employee = require("../lib/employee")
const employee = new Employee("Faye", "7", "faye@email.com")

test("getname function returns name", () => {
    expect(employee.getName()).toBe("Faye");
})

test("getId function returns Id", () => {
    expect(employee.getId()).toBe("7");
})

test("getemail function returns email", () => {
    expect(employee.getEmail()).toBe("faye@email.com");
})

test("getrole function returns role", ()=> {
    expect(employee.getRole()).toBe("Employee");
})