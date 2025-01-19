import { Injectable } from '@nestjs/common';
import { SlackWebhookService } from './slack/slack-webhook.service';

@Injectable()
export class AppService {
  constructor(private readonly slackWebhookService: SlackWebhookService) {}
  getHello(): string {
    this.slackWebhookService.sendEvent('알림 테스트');
    return 'Hello World!';
  }
}
