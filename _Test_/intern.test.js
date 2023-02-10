const Intern = require("../lib/intern");
const intern = new Intern("Lily", "4", "li2@email.com", "University of Central Florida")

test("getName function returns name", () => {
    expect(intern.getName()).toBe("Lily");
})

test("getId function returns Id", () => {
    expect(intern.getId()).toBe("4");
})

test("getEmail function returns email", () => {
    expect(intern.getEmail()).toBe("li2@email.com");
})

test("getRole function returns role", () => {
    expect(intern.getRole()).toBe("Intern");
}
)
test("getGithub function returns github", () => {
    expect(intern.getSchool()).toBe("University of Central Florida");
})