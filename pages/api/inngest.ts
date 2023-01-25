import { serve } from "inngest/next";
import createDemoEvents from "../../inngest/createDemoEvents";
import pushPageToCDN from "../../inngest/pushPageToCDN";

export default serve("Demo App", [createDemoEvents, pushPageToCDN]);
