const expect = require("expect");

const utils = require("./utils");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      var res = utils.add(3, 4);
      expect(res)
        .toBe(7)
        .toBeA("number");
    });

    it("should async add two numbers", done => {
      utils.asyncAdd(1, 3, sum => {
        expect(sum)
          .toBe(4)
          .toBeA("number");
        done();
      });
    });
  });

  describe("#Square", () => {
    it("should square up a number", () => {
      var res = utils.square(3);
      expect(res).toBe(9);
    });

    it("should async square a number", done => {
      utils.asyncSquare(3, sqr => {
        expect(sqr)
          .toBe(9)
          .toBeA("number");
        done();
      });
    });

    // it("should divide a number", () => {
    //   var res = utils.divide(6, 2);
    //   expect(res).toBe(3);
    // });
  });

  it("should verify first and last name are set", () => {
    var user = {
      age: 25,
      location: "India"
    };
    var fullName = "Sagar Kathuria";

    var res = utils.setName(user, fullName);

    expect(res)
      .toInclude({ firstName: "Sagar", lastName: "Kathuria" })
      .toBeA("object");
  });
});

// Just playing around
//checking some assertions
// it("should expect some values", () => {
//   // expect(12).toNotBe(13);

//   //expect({ name: "andrew" }).toBe({ name: "andrew" }); // this will give an error as the objects are not compared like this

//   //expect({ name: "Andrew" }).toEqual({ name: "Andrew" });

//   //expect([2, 3, 4]).toInclude(4); // to check something exist in array

//   //expect([2, 3, 4]).toExclude(4); // to check something exist in array

//   //expect({ name: "Andrew", age: 25, location: "india" }).toInclude({ age: 25 });
// });
