test("should 2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

describe(".to - test", () => {
  it(".toHave Length test", () => {
    expect("hello").toHaveLength(5);
  });

  it(".toHave Property test", () => {
    expect({ name: "hys" }).toHaveProperty("name", "hys");
  });

  it(".toBeDefined test", () => {
    expect({ name: "hys" }.name).toBeDefined();
  });

  it(".toBeFalsy test", () => {
    expect({ name: "hys" }.name).toBeDefined();
  });
});

describe("async test", () => {
  it("async test without done", done => {
    setTimeout(() => {
      expect(1).toBe(1);
      done();
    }, 1000);
  });

  it("async with promise", () => {
    function p() {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(1);
        }, 1000)
      );
    }
    return p().then(result => expect(result).toBe(1));
  });
});

describe("async - await test", () => {
  it("async with promise", async () => {
    function p() {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(3);
        }, 1000)
      );
    }

    const result = await p();
    expect(result).toBe(3);
  });
});
