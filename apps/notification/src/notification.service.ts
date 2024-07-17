import { Injectable, Logger } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, RedisContext } from '@nestjs/microservices';

interface NotifyData {
  user: string;
  data: object;
}


@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);


  getHello(): string {
    return 'Hello World!';
  }

  @EventPattern('notify')
  async notify(data: NotifyData) {
    console.log('send')
    this.logger.log("notification data" + data.user);
    let a: number = data.data['a'];
    let b: number = data.data['b'];
    console.log(a, b)
    return a + b;
  }
}
