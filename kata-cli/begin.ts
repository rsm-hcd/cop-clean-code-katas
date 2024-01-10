import { getFolderContents } from "./github/get-folder-contents.ts";
import { listKataNames } from "./list-katas/list-kata-names/list-kata-names.ts";

//move github api call to its own folder. have it called for copying files but also for listing katas
//listing katas cant happen via the directory structure anymore, because the files arent there when the cli is installed. it has to happen via the github api

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
        const fileUrl = file.download_url ?? "";
        const fileResponse = await fetch(fileUrl);

        if (!fileResponse.ok) {
          throw new Error(`Failed to download file: ${file.name}`);
        }

        const fileContent = await fileResponse.text();
        await Deno.writeTextFile(localFilePath, fileContent);

        console.log(`File '${file.name}' downloaded to '${localFilePath}'.`);
      }

      // Recursive call for subdirectories
      if (file.type === "dir") {
        await copyFolderFromGithub(file.path, localFilePath);
        console.log(`Folder '${localFolderPath}' copied successfully.`);
      }
    }
  } catch (error) {
    console.error(`Error copying folder: ${error}`);
  }
}

async function verifyKataExists(kataName: string): Promise<void> {
  const kataNames = await listKataNames();
  if (!kataNames.includes(kataName)) {
    throw new Error(
      `Kata '${kataName}' not found. Try 'kata list' to find a kata to practice.`
    );
  }
}

export async function begin(kataName: string, destinationFolder: string) {
  await verifyKataExists(kataName);
  await copyFolderFromGithub(kataName, destinationFolder);
}
