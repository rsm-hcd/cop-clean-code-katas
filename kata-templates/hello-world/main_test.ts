import { assertEquals } from "./deps.ts";
import { describe, it } from "./deps.ts";
import { sayHello } from "./main.ts";

describe("given the sayHello function", () => {
  describe("when called", () => {
    it("should print 'Hello World!'", () => {
      // Arrange
      let actualMessage = "";
      const expectedMessage = "Hello World!";
      console.log = (x) => {
        actualMessage = x;
      };

      // Act
      sayHello();

      // Assert
      assertEquals(actualMessage, expectedMessage);
    });
  });
});
