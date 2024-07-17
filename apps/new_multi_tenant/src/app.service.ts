import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('NOTIFY_SERVICE') private readonly client: ClientProxy,
  ) { }

  async getHello(): Promise<any> {
    // let receive = this.client.send<number>('notify', { user: "Test", data: { a: 1, b: 2 } }).toPromise();
    // let receive = await this.client.send<number>('notify', { user: "Test", data: { a: 1, b: 2 } })

    let receive = this.client.emit('notify', { user: "Test", data: { a: 1000, b: 2 } });

    console.log(receive);

    return "\t add 1+2=" + receive;
  }
}
