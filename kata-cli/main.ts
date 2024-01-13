import { begin } from "./begin.ts";
import { Denomander } from "./deps.ts";
import { listKataNames } from "./list-katas/list-kata-names/list-kata-names.ts";

const program = new Denomander({
  app_name: "Kata CLI",
  app_description: "Clean Code Community Of Practice Command Line Interface",
  app_version: "0.1.0",
});

program
  .command(
    "begin [name]",
    "Begin a new kata practice session by creating the necessary files inside of the directory",
  )
  .argDescription("name", "The name of the kata to practice")
  .option(
    "-d, --directory",
    "The directory to create the kata in",
    undefined,
    "./",
  )
  .action(async () => {
    try {
      await begin(program.name, program.directory);
    } catch (error) {
      console.log(`%c${error}`, "color: red");
    }
  });

program.command("list", "List all available katas").action(async () => {
  const kataNames = await listKataNames();
  console.log("List all available katas", kataNames);
});

program.command("update", "Update katas to latest version").action(() => {
  const command = new Deno.Command("deno", {
    args: [
      "cache",
      "--reload",
      import.meta.url,
    ],
  });

  command.outputSync();
  console.log("Update katas to latest version", import.meta.url);
});

program.parse(Deno.args);
