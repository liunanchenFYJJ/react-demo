import Test from './Test';
import TestSon from './TestSon';

let TestList = [];
let data = [
  ['jj', 0],
  ['jay', 0],
];

data.forEach(item => {
  TestList.push(new TestSon(...item));
});

export default TestList;