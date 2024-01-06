import { listKataNames } from "./list-katas/list-kata-names/list-kata-names.ts";

// copy-folder.ts
async function copyFolderFromGithub(
  apiUrl: string,
  sourceFolder: string,
  localFolderPath: string
): Promise<void> {
  try {
    // Fetch the contents of the folder from the GitHub API
    const folderUrl = `${apiUrl}/${sourceFolder}`;
    const response = await fetch(folderUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch folder contents: ${response.statusText}`
      );
    }

    const folderContents = await response.json();
    // Create the destination directory if it doesn't exist
    await Deno.mkdir(localFolderPath, { recursive: true });

    // Download each file from the folder
    for (const file of folderContents) {
      const fileUrl = file.download_url;
      const localFilePath = `${localFolderPath}/${file.name}`;
      if (file.type === "file") {
        // Download and write file content
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
        await copyFolderFromGithub(apiUrl, file.path, localFilePath);
        console.log(`Folder '${localFolderPath}' copied successfully.`);
      }
    }
  } catch (error) {
    console.error(`Error copying folder: ${error}`);
  }
}

function buildApiUrl(): string {
  const repoOwner = "rsm-hcd";
  const repoName = "cop-clean-code-katas";
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents`;
  return apiUrl;
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
  const apiUrl = buildApiUrl();
  await copyFolderFromGithub(apiUrl, kataName, destinationFolder);
}
