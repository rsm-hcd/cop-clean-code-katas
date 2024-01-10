import { getFolderContents } from "../../github/get-folder-contents.ts";

export async function listKataNames(): Promise<string[]> {
  // const pathToKatas = "../kata-templates";
  // const kataNames = await getDirectories(pathToKatas);
  // return kataNames;
  const kataNames: string[] = [];
  const folderContents = await getFolderContents("kata-templates");
  for (const file of folderContents) {
    if (file.type === "dir") {
      kataNames.push(file.name);
    }
  }

  return kataNames;
}
