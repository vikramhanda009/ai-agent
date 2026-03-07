import { chromium } from "playwright";

export async function findJobs() {

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://remoteok.com");

  const jobs = await page.$$eval(".job", elements =>
    elements.map(el => ({
      title: el.querySelector("h2")?.innerText,
      company: el.querySelector(".company")?.innerText,
      link: el.querySelector("a")?.href
    }))
  );

  await browser.close();

  return jobs;
}