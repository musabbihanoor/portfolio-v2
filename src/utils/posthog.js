import posthog from "posthog-js";

const PH_PROJECT_TOKEN = "phc_8DBrNzgW6jhXjEGVpOqOgultLGap34XIbpMFq7wBZrC";

const initPostHog = () => {
  posthog.init(PH_PROJECT_TOKEN, { api_host: "https://app.posthog.com" });
};

export default initPostHog;
