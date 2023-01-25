import { inngest } from "./client";
import casual from "casual";

// const delay = () => new Promise((resolve, reject) => {

// })

export default inngest.createScheduledFunction(
  "Create Demo Events",
  "0 * * * *",
  async () => {
    // const events = [
    //   {
    //     name: "app/landing_page.created",
    //     data: {
    //       page_id: casual.uuid,
    //       page_title: casual.company_name,
    //       url: casual.url,
    //     },
    //   },
    //   {
    //     name: "app/landing_page.created",
    //     data: {
    //       page_id: casual.uuid,
    //       page_title: casual.company_name,
    //       url: casual.url,
    //     },
    //   },
    //   {
    //     name: "app/user.signup",
    //     data: {
    //       user_id: casual.uuid,
    //       email: casual.email,
    //       name: casual.name,
    //     },
    //   },
    // ];
    // await inngest.send(events);
  }
);
