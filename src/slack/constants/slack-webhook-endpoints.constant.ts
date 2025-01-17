export const SLACK_WEBHOOK_ENDPOINTS = {
  channel1: 'endpoint1',
  channel2: 'endpoint2',
} as const;
export type SlackWebhookEndpointType = keyof typeof SLACK_WEBHOOK_ENDPOINTS;
