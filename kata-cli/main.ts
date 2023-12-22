import Denomander from "https://deno.land/x/denomander@0.9.3/mod.ts";

const program = new Denomander({
  app_name: "My App Name",
  app_description: "My App Description",
  app_version: "1.0.1"
});


program
  .command("begin")
  .requiredOption("-k --kataName", "Kata Name")
  .action(({ kataName }: any) => {
    console.log(kataName);
  });


  program.parse(Deno.args);