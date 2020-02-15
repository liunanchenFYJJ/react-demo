import React from 'react';
import ReactDOM from 'react-dom';
// import引入方式时 都需要在src中
// 直接使用时 则都是在public下
import logo from './assets/logo.svg';
import './App.css';
import Button from './components/Button';
import Clock from './components/Clock';
import Test from './components/Test';
import TestList from './components/_Test_test';
import TestSon from './components/TestSon';

// 路由
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

TestList[0].saySonName();

let t = new Test('jackie');

t.sayName();
t.name = 'myname';
t.sayName();
let s = new String('ss');


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

function Home() {
  return (
    <div>Home</div>
  )
}

function Users() {
  return (
    <div>Users</div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <br />
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
