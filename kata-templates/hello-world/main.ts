export function sayHello(): void {
  console.log("Hello World!");
}

if (import.meta.main) {
  sayHello();
}
