import { ECAFunction, ECAContext } from 'eca-compiler';

export class SendMessage extends ECAFunction {
  get name(): string {
    return 'send_message';
  }

  description(): string {
    return `Send message`
  }

  invoke(context: ECAContext) {
    return true;
  }
}