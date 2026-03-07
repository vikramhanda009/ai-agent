import { chromium } from "playwright";

export async function applyJob(job) {

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(job.link);

  console.log("Applying to:", job.title);

  // Example
  // await page.fill("#name", process.env.USER_NAME);
  // await page.fill("#email", process.env.USER_EMAIL)

  await browser.close();

}