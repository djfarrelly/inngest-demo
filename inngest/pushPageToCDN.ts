import { inngest } from "./client";

export default inngest.createStepFunction(
  "Push page to CDN",
  "app/landing_page.created",
  ({ event, tools }) => {
    const html = tools.run("Generate page HTML", () => {
      return { html: "<html><head>..." };
    });

    tools.run("Upload to CDN", () => {
      // randomly fail
      const rand = Math.floor(Math.random() * 10);
      if (rand === 5) {
        throw new Error("Failed to upload page files");
      }
      return { success: true, url: `https://${event.data.url}` };
    });
  }
);
