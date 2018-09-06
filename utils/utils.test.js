const utils = require("./utils");
const expect = require("expect");

it("should add two numbers", () => {
  var res = utils.add(3, 4);
  expect(res).toBe(7);
  //   if (res !== 7) {
  //     throw new Error(`Expected 7, but got ${res}`);
  //   }
});

it("should square up a number", () => {
  var res = utils.square(3);
  if (res !== 9) {
    throw new Error(`Expected 9, but actual is ${res}`);
  }
});
