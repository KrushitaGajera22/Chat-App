let expect = require("expect").default;

const { isRealString } = require("./isRealString");

describe("is Real String", () => {
  it("should reject non-string values", () => {
    let res = isRealString(65);
    expect(res).toBe(false);
  });

  it("should reject string with only spaces", () => {
    let res = isRealString('       ');
    expect(res).toBe(false);
  });

  it("should allow string with non-space characters", () => {
    let res = isRealString('   dsv     ');
    expect(res).toBe(true);
  });
});
