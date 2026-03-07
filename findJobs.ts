import { chromium } from "playwright";

async function getJobs() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://remoteok.com");

  const jobs = await page.$$eval(".job", elements =>
    elements.map(el => ({
      title: el.querySelector("h2")?.innerText,
      company: el.querySelector(".company")?.innerText
    }))
  );

  console.log(jobs);
}

getJobs();