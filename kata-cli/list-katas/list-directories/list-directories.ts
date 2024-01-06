export async function getDirectories(directoryPath: string): Promise<string[]> {
  try {
    const entries: Deno.DirEntry[] = [];
    for await (const entry of Deno.readDir(directoryPath)) {
      entries.push(entry);
    }

    const directories = entries
      .filter((entry) => entry.isDirectory)
      .map((entry) => entry.name);

    return directories;
  } catch (error) {
    console.error(`Error reading directory: ${directoryPath}\n${error}`);
    return [];
  }
}
