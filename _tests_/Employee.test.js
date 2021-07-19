const Employee = require('../lib/Employee.js');

test('creates a random employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    

});