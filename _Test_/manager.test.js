const Manager = require('../lib/manager')


describe("Manager",() => {
    it("should initialize and have a Manager role", () => {
        let name = "Michael";
        let id = 1
        let email = "mc@email.com"
        let role = "Manager"
        let officNumb = 432

        let manager = new Manager(name, id, email, officNumb)

        expect(manager.name).toEqual(name)
        expect(manager.id).toEqual(id)
        expect(manager.email).toEqual(email)
        expect(manager.getRole()).toEqual(role)
        expect(manager.officeNumber).toEqual(officNumb)
    })
})