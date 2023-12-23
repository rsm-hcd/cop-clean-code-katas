// import Denomander from "https://deno.land/x/denomander@0.9.3/mod.ts";

// const program = new Denomander({
//   app_name: "Kata CLI",
//   app_description: "The Clean Code Community Of Practice Command Line Interface for conducting Katas",
//   app_version: "0.0.1",
//   throw_errors: true,
//   options: {
//     help: "classic",
//   },
// });

// program
//   .command("info", "Just an info")
//   .action(() => program.print().info("This is an info"));


// program
//   .command("begin")
//   .requiredOption("-k --kataName", "Kata Name")
//   .action(({ kataName }: any) => {
//     console.log(kataName);
//   });


//   program
//   .command("test")
//   .action(() => {
//     console.log('this is a test');
//   });

  // try {
  //   console.log('ARGH!');
  //   program.parse(Deno.args);
  // } catch (error) {
  //   console.log(error);
  // }

  function main(): void {
    console.log('Hello World');
  }
  
  main();