import { describe, it, assert, beforeAll } from "./deps.ts";
import { install } from "./install.ts";

describe("given bash is installed", () => {
  const bashrcPath = Deno.env.get("HOME") + "/.bashrc";

  describe("when installing the Kata CLI", () => {
    let bashrcContent: string;
    beforeAll(async () => {
      await install();
      bashrcContent = await Deno.readTextFile(bashrcPath);
    });
    describe("the kata alias", () => {
      const expectedAlias = "kata";

      it("should exist", () => {
        const isAliasPresent = bashrcContent.includes(
          `alias ${expectedAlias}=`
        );
        assert(isAliasPresent, `Alias ${expectedAlias} not found in .bashrc`);
      });

      it("should only exist once", () => {
        const aliasOccurrences = (
          bashrcContent.match(new RegExp(`alias ${expectedAlias}=`, "g")) || []
        ).length;

        // Assert that the alias occurs exactly once
        assert(
          aliasOccurrences === 1,
          `Expected alias ${expectedAlias} to occur exactly once in .bashrc, but found ${aliasOccurrences} occurrences.`
        );
      });
    });

    describe("the kata-update alias", () => {
      const expectedAlias = "kata-update";
      it("should exist", () => {
        const isAliasPresent = bashrcContent.includes(
          `alias ${expectedAlias}=`
        );
        assert(isAliasPresent, `Alias ${expectedAlias} not found in .bashrc`);
      });

      it("should only exist once", () => {
        const aliasOccurrences = (
          bashrcContent.match(new RegExp(`alias ${expectedAlias}=`, "g")) || []
        ).length;

        // Assert that the alias occurs exactly once
        assert(
          aliasOccurrences === 1,
          `Expected alias ${expectedAlias} to occur exactly once in .bashrc, but found ${aliasOccurrences} occurrences.`
        );
      });
    });
  });
});
