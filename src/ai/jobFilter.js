import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function filterJobs(jobs) {

  const relevantJobs = [];

  for (const job of jobs) {

    const prompt = `
Check if this job matches skills:
Node.js, React, Next.js, AWS

Job Title: ${job.title}

Answer only YES or NO
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const answer =
      response.data.choices[0].message.content;

    if (answer.includes("YES")) {
      relevantJobs.push(job);
    }

  }

  return relevantJobs;
}