import Test from './Test';
import TestSon from './TestSon';

console.log(Test);

let TestList = [];
let data = [
  ['jj', 0],
  ['jay', 0],
];

data.forEach(item => {
  TestList.push(new TestSon(...item));
});
let a = '1'
switch (a) {
  case 1:
    console.log('dd')
    break;

  default:
    break;
}

export default TestList;