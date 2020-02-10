import Test from './Test';

class TestSon extends Test {
  constructor(name, age, sex = 'male') {
    super(name, age);
    this.sex = sex;
  }

  saySonName() {
    console.log(`my gender is ${this.sex}`);
  }
}

export default TestSon;