import { getDirectories } from "../list-directories/list-directories.ts";

export async function listKataNames() {
  const pathToKatas = "../kata-templates";
  const kataNames = await getDirectories(pathToKatas);
  return kataNames;
}
