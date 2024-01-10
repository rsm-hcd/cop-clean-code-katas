import { getFolderContents } from "../../github/get-folder-contents.ts";

export async function listKataNames(): Promise<string[]> {
  const kataNames: string[] = [];
  const folderContents = await getFolderContents("kata-templates");
  for (const file of folderContents) {
    if (file.type === "dir") {
      kataNames.push(file.name);
    }
  }

  return kataNames;
}
