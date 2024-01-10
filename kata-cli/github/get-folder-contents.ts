import { FolderContents } from "./folder-contents.ts";

function buildApiUrl(): string {
  const repoOwner = "rsm-hcd";
  const repoName = "cop-clean-code-katas";
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents`;
  return apiUrl;
}

export async function getFolderContents(
  folderPath: string
): Promise<FolderContents[]> {
  const apiUrl = buildApiUrl();
  const url = `${apiUrl}/${folderPath}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch folder contents: ${response.statusText}`);
  }

  const folderContents = await response.json();
  return folderContents as FolderContents[];
}
