let instance: any = null;

export default class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
}
