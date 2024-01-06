import { assert, describe, it } from "../../deps.ts";
import { listKataNames } from "../list-kata-names/list-kata-names.ts";

describe("listKataNames", () => {
  describe("given a directory containing all Kata Templates", () => {
    it("should not error", async () => {
      try {
        await listKataNames();
        assert(true);
      } catch (error) {
        assert(false, `Error thrown: ${error}`);
      }
    });
  });
});
