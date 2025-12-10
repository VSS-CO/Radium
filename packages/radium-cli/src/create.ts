import { banner } from "./banner.ts";

export async function createProject() {
  console.log(banner());
  console.log("Scaffolding new Radium project...");
}
