import { assertEquals, describe, it, afterAll, beforeAll } from "../../deps.ts";
import { getDirectories } from "./list-directories.ts";

describe("listDirectories", () => {
  describe("given a directory with subdirectories", () => {
    const testDirectory = "test_directory";

    beforeAll(async () => {
      // Create a temporary test directory
      await Deno.mkdir(testDirectory);
      await Deno.mkdir(testDirectory + "/dir1");
      await Deno.mkdir(testDirectory + "/dir2");
    });

    it("should return an array of directories", async () => {
      const result = await getDirectories(testDirectory);
      assertEquals(result, ["dir1", "dir2"]);
    });

    // Remove the temporary test directory
    afterAll(async () => {
      await Deno.remove(testDirectory, { recursive: true });
    });
  });

  describe("given a non-existent directory", () => {
    const nonExistentDirectory = "non_existent_directory";

    it("should return an empty array", async () => {
      const result = await getDirectories(nonExistentDirectory);
      assertEquals(result, []);
    });
  });
});
