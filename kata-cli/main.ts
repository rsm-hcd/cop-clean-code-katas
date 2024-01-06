import { begin } from "./begin.ts";
import { Denomander } from "./deps.ts";
import { listKataNames } from "./list-katas/list-kata-names/list-kata-names.ts";

const program = new Denomander({
  app_name: "Kata CLI",
  app_description: "Clean Code Community Of Practice Command Line Interface",
  app_version: "0.0.2",
});

program
  .command(
    "begin [name]",
    "Begin a new kata practice session by creating the necessary files inside of the directory"
  )
  .argDescription("name", "The name of the kata to practice")
  .option(
    "-d, --directory",
    "The directory to create the kata in",
    undefined,
    "./"
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

program.parse(Deno.args);
