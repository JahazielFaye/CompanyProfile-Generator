const Engineer = require("../lib/engineer");
const engineer = new Engineer("Sufri", "9", "suf@email.com", "suf1a");

test("getName function returns name", () => {
    expect(engineer.getName()).toBe("Sufri");
})

test("getId function returns id", () => {
    expect(engineer.getId()).toBe("9");
})

test("getEmail function returns email", () => {
    expect(engineer.getEmail()).toBe("suf@email.com");
})

test("getRole function returns role", () => {
    expect(engineer.getRole()).toBe("Engineer");
}
)
test("getGithub function returns github", () => {
    expect(engineer.getGithub()).toBe("suf1a");
})
