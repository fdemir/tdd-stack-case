const Stack = require("../stack");

describe("my stack tests", () => {
  let template;

  beforeEach(() => {
    template = new Stack();
  });

  test("should create new instance", () => {
    expect(template instanceof Stack).toBe(true);
  });

  test("creates an empty stack", () => {
    expect(template.top).toBe(0);
    expect(template.data).toEqual([]);
  });

  test("should check the data empty", () => {
    expect(template.isEmpty()).toBe(true);
  });

  test("adds an element to the stack", () => {
    let parameter = 10;
    template.push(parameter);
    expect(template.top).toBe(1);
    expect(template.peek()).toBe(parameter);
  });

  test("pops an element from the stack.", () => {
    let parameter = 360;

    template.push(parameter);

    let operation = template.pop();

    expect(operation).toBe(parameter);
    expect(template.top).toBe(0);
    expect(template.data).toEqual([]);
  });

  test("gets the top element of the stack", () => {
    let name = "Furkan";
    let surname = "Demir";

    template.push(name);
    template.push(surname);

    expect(template.peek()).toEqual(surname);
  });

  test("returns the length of the stack", () => {
    let parameter = { a: 4 };

    template.push(parameter);

    expect(template.length()).toEqual(1);
  });

  test("prints the elements of the stack", () => {
    let broken_heart = "💔";
    let revolving_heart = "💞";

    template.push(broken_heart);
    template.push(revolving_heart);

    const consoleSpy = jest.spyOn(console, "log");

    template.print();

    expect(consoleSpy).toHaveBeenCalledWith([broken_heart, revolving_heart]);
  });
});
