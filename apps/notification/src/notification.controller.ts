import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

  @EventPattern('notify')
  async notify(data: any) {
    return this.notificationService.notify({
      user: data.user,
      data: data.data
    });
  }
}
