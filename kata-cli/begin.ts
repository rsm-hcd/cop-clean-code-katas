// copy-folder.ts
async function copyFolderRecursively(apiUrl: string, localFolderPath: string): Promise<void> {
    try {
      // Fetch the contents of the folder from the GitHub API
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch folder contents: ${response.statusText}`);
      }
  
      const folderContents = await response.json();
      console.log(folderContents);
      // Create the destination directory if it doesn't exist
      await Deno.mkdir(localFolderPath, { recursive: true });
  
      // Download each file from the folder
      for (const file of folderContents) {
        const fileUrl = file.download_url;
        const localFilePath = `${localFolderPath}/${file.name}`;
  
        // Download and write file content
        const fileResponse = await fetch(fileUrl);
  
        if (!fileResponse.ok) {
          throw new Error(`Failed to download file: ${file.name}`);
        }
  
        const fileContent = await fileResponse.text();
        await Deno.writeTextFile(localFilePath, fileContent);
  
        console.log(`File '${file.name}' downloaded to '${localFilePath}'.`);
  
        // Recursive call for subdirectories
        if (file.type === 'dir') {
          console.log(file.name);
          await copyFolderRecursively(fileUrl, localFilePath);
        }
      }
  
      console.log(`Folder '${localFolderPath}' copied successfully.`);
    } catch (error) {
      console.error(`Error copying folder: ${error}`);
    }
  }
  
  async function copyFolder() {
    const repoOwner = 'rsm-hcd';
    const repoName = 'cop-clean-code-katas';
    const folderPath = '/kata-cli';
    const destinationPath = '../local-folder';
  
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`;
  
    await copyFolderRecursively(apiUrl, destinationPath);
  }
  
  await copyFolder();
  