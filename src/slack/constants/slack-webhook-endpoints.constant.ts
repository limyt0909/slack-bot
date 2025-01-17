export const SLACK_WEBHOOK_ENDPOINTS = {
  channel1: process.env.SLACK_HOOK,
} as const;
export type SlackWebhookEndpointType = keyof typeof SLACK_WEBHOOK_ENDPOINTS;
