jasmine.getEnv().addReporter(require('jasmine-faustao-errou'));

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    expect(2+2).toBe(5);
  });
});
