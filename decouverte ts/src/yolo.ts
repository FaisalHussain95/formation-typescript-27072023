export class Yolo {
  osef() {
    console.log('test');
  }
  testNumber(): number {
    console.log('test');
    return 1 + 1;
  }
  returnMultipleImplicit(c: number){
    console.log('test');
    if (c === 0) {
      return 1 + 1;
    }

    return 'Oups';
  }
}
