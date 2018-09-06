const request = require("supertest");
const expect = require("expect");
var { app } = require("./server");

// it("should return hello world response", done => {
//   request(app)
//     .get("/")
//     .expect(200)
//     .expect("Hello World")
//     .end(done);
// });
describe("Server", () => {
  describe("GET /help", () => {
    it("should have a valid response", done => {
      request(app)
        .get("/help")
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            error: "Page not found"
          });
        })
        .end(done);
    });
  });
  describe("GET /users", () => {
    it("should return user with name aip1", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          //console.log(res.body.users.some(el => el.name === "aip1"));
          expect(res.body.users).toInclude({ name: "aip1", age: 25 }); // accessing the object returned from request of an API
        })
        .end(done);
    });
  });
});
