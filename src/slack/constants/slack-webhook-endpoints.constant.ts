export const SLACK_WEBHOOK_ENDPOINTS = {
  channel1:
    'https://hooks.slack.com/services/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',
} as const;
export type SlackWebhookEndpointType = keyof typeof SLACK_WEBHOOK_ENDPOINTS;
