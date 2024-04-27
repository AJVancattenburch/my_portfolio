import { SocketHandler } from '../utils/SocketHandler';

class TestHandler extends SocketHandler {

  constructor() {
    super()
    this
      .on('IS_TESTED', this.onTest)
  }

  onTest(payload){
    console.log('Received IS_TESTED', payload)
  }

}

export const testHandler = new TestHandler()
