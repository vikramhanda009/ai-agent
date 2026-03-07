import cron from "node-cron";
import { findJobs } from "./scraper/remoteok.js";
import { filterJobs } from "./ai/jobFilter.js";
import { applyJob } from "./apply/applyJob.js";
import { sendEmail } from "./email/sendEmail.js";

export default function startScheduler() {

  cron.schedule("0 */6 * * *", async () => {

    console.log("Running Job Agent");

    const jobs = await findJobs();

    const filtered = await filterJobs(jobs);

    for (const job of filtered) {
      await applyJob(job);
    }

    await sendEmail(filtered);

  });

}