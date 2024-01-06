import { getDirectories } from "../list-directories/list-directories.ts";

export async function listKataNames() {
  const pathToKatas = Deno.env.get("PATH_TO_KATAS");

  if (!pathToKatas) {
    throw new Error("PATH_TO_KATAS environment variable not set.");
  }
  const kataNames = await getDirectories(pathToKatas);
  return kataNames;
}
