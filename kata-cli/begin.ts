import { getFolderContents } from "./github/get-folder-contents.ts";
import { listKataNames } from "./list-katas/list-kata-names/list-kata-names.ts";

// copy-folder.ts
async function copyFolderFromGithub(
  sourceFolder: string,
  localFolderPath: string
): Promise<void> {
  try {
    const folderContents = await getFolderContents(sourceFolder);
    // Create the destination directory if it doesn't exist
    await Deno.mkdir(localFolderPath, { recursive: true });

    // Download each file from the folder
    for (const file of folderContents) {
      const localFilePath = `${localFolderPath}/${file.name}`;
      if (file.type === "file") {
        // Download and write file content
        const fileUrl = file.download_url;
        if (!fileUrl) {
          throw new Error(`No download URL found for file: ${file.name}`);
        }
        const fileResponse = await fetch(fileUrl);

        if (!fileResponse.ok) {
          throw new Error(`Failed to download file: ${file.name}`);
        }

        const fileContent = await fileResponse.text();
        await Deno.writeTextFile(localFilePath, fileContent);
      }

      // Recursive call for subdirectories
      if (file.type === "dir") {
        await copyFolderFromGithub(file.path, localFilePath);
      }
    }
  } catch (error) {
    console.error(`Error copying folder: ${error}`);
  }
}

async function errorIfKataDoesntExist(kataName: string): Promise<void> {
  const kataNames = await listKataNames();
  if (!kataNames.includes(kataName)) {
    throw new Error(
      `Kata '${kataName}' not found. Try 'kata list' to find a kata to practice.`
    );
  }
}

export async function begin(kataName: string, destinationFolder: string) {
  await errorIfKataDoesntExist(kataName);
  const sourceFolder = `kata-templates/${kataName}`;
  await copyFolderFromGithub(sourceFolder, destinationFolder);
}
