import { describe, it, assert, beforeAll, beforeEach } from "./deps.ts";
import { install } from "./install.ts";
import { exec } from "https://deno.land/x/exec/mod.ts";

describe("given kata CLI is installed", () => {
  //   beforeAll(async () => {
  //     await install();
  //     // const command = new Deno.Command("exec", {
  //     //   args: ["bash"],
  //     // });
  //     // const command = new Deno.Command("source", { args: ["~/.bashrc"] });
  //     // const command = new Deno.Command("cmd", {
  //     //   args: ["/c", "source", "~/.bashrc"],
  //     // });
  //     // const command = new Deno.Command("cmd", {
  //     //   args: ["/c", "exec", "bash"],
  //     // });
  //     // const command = new Deno.Command("echo", { args: ["helloooooo world"] });
  //     // const command = new Deno.Command("kata", { args: ["begin", "anagrams"] });
  //     // const commandOutput = await command.output();
  //     // commandOutput.code;

  //     // if (commandOutput.code === 0) {
  //     //   console.log("bash refreshed successfully");
  //     // } else {
  //     //   const errorOutput = new TextDecoder().decode(commandOutput.stderr);
  //     //   console.error(`Error executing the command: ${errorOutput}`);
  //     // }
  //     // await exec("source ~/.bashrc");
  //   });
  describe("when a user is beginning the kata", () => {
    describe("anagrams", () => {
      beforeAll(async () => {
        const response = await exec(
          "deno run --unstable -A main.ts begin anagrams -d ./test-folder"
        );
        console.log(response);
        if (!response.status.success) {
          console.log(`Kata begin anagrams failed. ${response.output}`);
        }
        // const command = new Deno.Command("deno", {
        //   args: [
        //     "run",
        //     "--unstable",
        //     "-A",
        //     "main.ts",
        //     "begin",
        //     "anagrams",
        //     "-d",
        //     "./test",
        //   ],
        // });
        // const commandOutput = await command.output();
        // commandOutput.code;
        // if (commandOutput.code === 0) {
        //   console.log("Command executed successfully");
        // } else {
        //   const errorOutput = new TextDecoder().decode(commandOutput.stderr);
        //   console.error(`Error executing the command: ${errorOutput}`);
        // }
      });
      //   it("should create the text file of english words", async () => {
      //     const fileExists = await Deno.stat("./test/words.txt");
      //     assert(fileExists);
      //   });
    });
  });
});
