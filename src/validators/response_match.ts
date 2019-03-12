import { ECAFunction, ECAContext } from 'eca-compiler';

export class ResponseMatch extends ECAFunction {
  get name(): string {
    return 'response_match';
  }

  description(): string {
    return `Response match`
  }

  invoke(context: ECAContext) {
    return true;
  }
}