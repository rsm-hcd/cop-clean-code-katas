async function createBashAlias(
  aliasName: string,
  aliasCommand: string
): Promise<void> {
  const bashrcPath = `${Deno.env.get("HOME")}/.bashrc`;
  const aliasLine = `\nalias ${aliasName}='${aliasCommand}'\n`;

  try {
    await Deno.writeTextFile(bashrcPath, aliasLine, { append: true });
    console.log(`Alias '${aliasName}' has been added to your .bashrc file.`);
    console.log(`Your .bashrc file is located at '${bashrcPath}'.`);
    console.log(`Restart your terminal or run 'exec bash' to apply changes.`);
  } catch (error) {
    console.error(`Error adding alias to .bashrc: ${error}`);
  }
}

async function installKataCli(): Promise<void> {
  const aliasName = "kata";
  const aliasCommand =
    "deno run --unstable -A https://raw.githubusercontent.com/rsm-hcd/cop-clean-code-katas/main/kata-cli/main.ts";

  await createBashAlias(aliasName, aliasCommand);
}

async function installKataCliUpgrade(): Promise<void> {
  const aliasName = "kata-update";
  const aliasCommand =
    "deno cache --reload https://raw.githubusercontent.com/rsm-hcd/cop-clean-code-katas/main/kata-cli/main.ts";

  await createBashAlias(aliasName, aliasCommand);
}

async function install(): Promise<void> {
  await installKataCli();
  await installKataCliUpgrade();
}

await install();
