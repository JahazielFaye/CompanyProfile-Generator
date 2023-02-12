const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// Test case to check if the employee object is created successfully
test('creates an Employee object', () => {
    const employee = new Employee();
    // Checking if the type of the object is object
    expect(typeof(employee)).toBe("object");
});
// Test case to check if the employee's name is retrieved successfully
test("gets employee's name", () => {
    const employee = new Employee('Employee1');
    // Checking if the name of the employee is returned as expected
    expect(employee.getName()).toBe('Employee1');
});

test("gets employee's id", () => {
    const employee = new Employee('Employee1', '1');

    expect(employee.getId()).toBe('1');
});

test("get employee's email", () => {
    const employee = new Employee('Employee1', '1', 'jahaze@outlook.com');

    expect(employee.getEmail()).toBe('jahaze@outlook.com');
});

test("getRole() returns Employee", () => {
    const employee = new Employee('Employee');

    expect(employee.getRole()).toBe('Employee');
});