import { Injectable, Logger } from '@nestjs/common';
import {
  SlackWebhookEndpointType,
  SLACK_WEBHOOK_ENDPOINTS,
} from './constants/slack-webhook-endpoints.constant';
import { IncomingWebhook } from '@slack/webhook';

@Injectable()
export class SlackWebhookService {
  private async _send(url: string, message: string) {
    console.log(url, message);
    if (process.env.NODE_ENV === 'local') {
      console.log('슬랙메시지: ', message);
      return;
    }
    try {
      const webhook = new IncomingWebhook(url);
      (async () => {
        await webhook.send({
          text: message,
        });
      })();
    } catch (e) {
      Logger.error(e);
    }
  }
  async send(type: SlackWebhookEndpointType, message: string) {
    this._send(SLACK_WEBHOOK_ENDPOINTS[type], `<@U055A7CJCUV> ${message}`);
  }

  async sendEvent(message: string) {
    this.send('channel1', message);
  }
}
