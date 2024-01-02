import { Denomander } from "./deps.ts";
import { begin } from "./begin.ts";

const program = new Denomander({
  app_name: "Kata CLI",
  app_description: "Clean Code Community Of Practice Command Line Interface",
  app_version: "1.0.1",
});

program
  .command(
    "begin",
    "Begin a new kata practice session by creating a new directory and the necessary files"
  )
  .requiredOption("-n, --name", "The name of the kata to practice")
  .option(
    "-d, --directory",
    "The directory to create the kata in",
    undefined,
    "."
  )
  .action(async () => {
    console.log(
      program.name,
      program.directory,
      "Begin a new kata practice session"
    );
    await begin(program.name, program.directory);
  });

program.parse(Deno.args);
