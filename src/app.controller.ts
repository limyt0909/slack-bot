import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log("hook?", process.env.SLACK_HOOK)
    return this.appService.getHello();
  }
}
