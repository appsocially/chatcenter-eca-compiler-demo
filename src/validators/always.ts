import { ECAFunction, ECAContext } from 'eca-compiler';

export class Always extends ECAFunction {
  constructor() {
    super();
  }
  get name(): string {
    return 'always';
  }

  description(): string {
    return `Always`;
  }

  invoke(context: ECAContext) {
    return true;
  }
}