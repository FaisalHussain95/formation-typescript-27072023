import { Yolo } from './yolo';

let y = new Yolo();
y.osef();

// Test return type
let t: string | number;
t = y.returnMultipleImplicit(0);

// y = 1; //  error TS2322: Type 'number' is not assignable to type 'Yolo'.
