const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


test('creates a manager object', () => {
    const manager = new Manager('Manager1');

    expect(typeof(manager)).toBe('object');
});

test('gets office number', () => {
    const manager = new Manager('Manager', '1', 'Fayekeith@m.com', '7');

    expect(manager.getofficeNumber()).toBe('7');
});

test('getRole() returns Manager', () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toBe('Manager');
});