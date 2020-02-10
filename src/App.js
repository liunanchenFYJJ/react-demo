import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Clock from './components/Clock';
import Test from './components/Test';
import TestList from './components/_Test_test';
import TestSon from './components/TestSon';

console.log(TestList);
TestList[0].saySonName();

let t = new Test('jackie');
console.log(t.constructor === Test);
t.sayName();
t.name = 'myname';
t.sayName();
let s = new String('ss');
console.log(s);
console.log('--Test--');
console.log(Clock);
console.log(Clock.prototype)
console.log(Clock.prototype.constructor === Clock)

const aAttr = {
  href: "https://reactjs.org",
  target: "_blank",
  rel: "noopener noreferrer",
};

const pStyle = {
  color: "red",
};

function tick() {
  ReactDOM.render(<Clock test={'hello'}></Clock>, document.getElementById('clock'));
}
function tick1() {
  ReactDOM.render(<Clock></Clock>, document.getElementById('clock1'));
}

// 生命周期问题 这时候#clock还没有？
// tick();
setInterval(() => {
  tick();
}, 1000);
setInterval(() => {
  tick1();
}, 3000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={pStyle}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          {...aAttr}
        >
          Learn React
        </a>
        <Button title="custom button"></Button>
        <Button title="按钮文字"></Button>
        <div id="clock"></div>
        <div id="clock1"></div>
      </header>
    </div>
  );
}

export default App;
