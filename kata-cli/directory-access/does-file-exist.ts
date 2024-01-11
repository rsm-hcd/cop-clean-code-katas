import { exists } from "../deps.ts";

export async function doesFileExists(filePath: string): Promise<boolean> {
  try {
    return await exists(filePath);
  } catch (error) {
    console.error(`Error checking file existence: ${error.message}`);
    return false;
  }
}
