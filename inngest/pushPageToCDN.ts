import { inngest } from "./client";

export default inngest.createFunction(
  "Push page to CDN",
  "app/landing_page.created",
  async ({ event, step }) => {
    const html = await step.run("Generate page HTML", () => {
      return { html: "<html><head>..." };
    });

    await step.run("Upload to CDN", () => {
      // randomly fail
      const rand = Math.floor(Math.random() * 10);
      if (rand === 5) {
        throw new Error("Failed to upload page files");
      }
      return { success: true, url: `https://${event.data.url}` };
    });
  }
);
