import { Injectable } from '@nestjs/common';
import { SlackWebhookService } from './slack/slack-webhook.service';

@Injectable()
export class AppService {
  constructor(private readonly slackWebhookService: SlackWebhookService) { }
  getHello(): string {
    console.log(process.env.SLACK_HOOK)


    this.slackWebhookService.sendEvent('멘션 테스트');
    return 'Hello World!';
  }
}
