const { cryptoHash } = require("./cryptoHash");

describe("cryptoHash()", () => {
  it("generates a sha256 hashed output", () => {
    expect(cryptoHash("andre")).toEqual(
      "bd01b0b648c2c64eb1bddd9361d9972ea684b344fedc4d166654a85e8919e7ad"
    );
  });

  it("Expect the same result, regardless of the order of the inputs", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "two", "one")
    );
  });
});
