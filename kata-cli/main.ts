  import Denomander from "https://deno.land/x/denomander@0.9.3/mod.ts";

  const program = new Denomander({
    app_name: "Kata CLI",
    app_description: "Clean Code Community Of Practice Command Line Interface",
    app_version: "1.0.1",
  });

  program
  .command("begin", "Begin a new kata practice session")
  .requiredOption("-k, --kata", "The kata to practice")
  .action(() => {
    console.log(program.kata);
    console.log("Begin a new kata practice session");
  });

  program.parse(Deno.args);