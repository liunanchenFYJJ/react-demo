import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// render return 的是需要渲染的
// class ShoppingList extends React.component {
//   render () {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for { this.props.name }</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>QQ</li>          
//         </ul>
//       </div>
//     )
//   }
// }

// JSX
const user = {
  firstName: 'jay',
  lastName: 'chow'
}

// 写法一
class formatName extends React.Component {
  render () {
    return this.props.firstName + ' ' + this.props.lastName
  }
}

// 写法二
// function formatName (user) {
//   return user.firstName + ' ' + user.lastName
// }
// component 组件名、组件标签大写； 小写默认为HTML标签
// function F1(props) {
//   return <h2>hello, { props.name }.age is { props.age === '' ? 'empty' : props.age }</h2>
// }

class F1 extends React.Component {
  render () {
    return <h2>hello, { this.props.name }.age is { this.props.age === '' ? 'empty' : this.props.age }</h2>
  }
}
// 组件复用
function App () {
  return (
    <div>
      <F1 name={user.lastName}/>
      <F1 name="martin1" age="78"/>
      <F1 name="martin2"/>    
    </div>
  )
}
// const element = <F1 name={ user.lastName }/>

const cc = {
  author: {
    name: 'jackson',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
  text: 'text',
  date: new Date(),
  name: 'cln'
}

function formatDate (date) {
  return date.toLocaleDateString()
}

// 以下给<Comment /> 定义了 author{}、text、 date 三个属性，其中author 为对象
// function方式写component
// 拆分
// 注意：All React components must act like pure functions with respect to their props
// function Avatar (props) {
//   return (
//     <img className="Avatar" src={ props.author.avatarUrl } alt={ props.author.name }/>
//   )
// }
// class方式写component
// 从自身角度命名props， 而不是根据组件的上下文
// props 的只读性 React组件必须像纯函数那样使用props(即不改变输入值)
class Avatar extends React.Component {
  render () {
    return <img className="Avatar" src={ this.props.user.avatarUrl } alt={ this.props.user.name }/>
  } 
}
function Username (props) {
  return (
    <div className="Username">{ props.author.name }</div>    
  )
}
function CommentText (props) {
  return (
    <div className="CommentText">{ props.text }</div>    
  )
}
function CommentDate (props) {
  return (
    <div className="CommentDate">{ formatDate(props.date) }</div>          
  )
}
function UserInfo () {
  return (
    <div className="UserInfo">
      <Avatar user={cc.author}/>
      <Username author={cc.author}/>
    </div>
  )
}
function Comment (props) {
  return (
    <div className="Comment">
      <UserInfo />
      {/* <div className="UserInfo"> */}
        {/* <Avatar author={cc.author}/> */}
        {/* <Username author={cc.author}/> */}
        {/* <img className="Avatar" src={ props.author.avatarUrl } alt={ props.author.name }/> */}
        {/* <div className="Username">{ props.author.name }</div> */}
      {/* </div> */}
      <CommentText text={cc.text} />
      <CommentDate date={cc.date} />      
      {/* <div className="Comment-text">{ props.text }</div> */}
      {/* <div className="Comment-date">{ formatDate(props.date) }</div>       */}
    </div>
  )
}
// 推荐在jsx代码的外面扩上(), 防止代码自动插入的bug
// jsx 编译之后转化为普通的 js 对象，所以可以写在 js 语句中

// const element = ( <Comment date={cc.date} text={cc.text} author={cc.author}/> )

// 提取组件

function getGreetings (user) {
  if (user) {
    return <h1>hello, { formatName(user) }</h1>
  } else {
    // const user = null    
    return <h1>hello, stranger!</h1>
  }
}

// element 一旦创建，不可改变！唯有创建新的
// 或者 通过改变 state (使用state必须使用组件class写法)
// 提取出 clock 样式
// function Clock(props) {
//   return (
//     <div>
//       <h1>hello, clock</h1>
//       <h2>time is {''} { props.date.toLocaleTimeString() }</h2>
//     </div>
//   )
// }
// 使用state， 移除原来的props到state
// 在组件 类 中使用 生命周期钩子
class Clock extends React.Component {
  // 初始化state
  // 1.Clock需要展示的数据
  constructor (props) {
    super(props)
    this.state = {
      date: cc.date,
      name: cc.name
    }
  }
  // 挂载 clock 每两秒钟自己更新自己得状态
  // 挂在生命周期钩子
  componentDidMount () {
    console.log('挂载,每一秒执行一次')
    this.timerID = setInterval(() => {
      this.tickInside()
    }, 2000)
  }
  // 卸载
  componentWillUnmount () {
    console.log('移除挂载')    
    clearInterval(this.timerID)
  }
  tickInside () {
    // 4.调用tickInside，使用setState更新UI
    // setState也是唯一更改数据的方式
    this.setState({
      date: new Date(),
      name: 'JT-' + new Date().getTime()
    })
    // setState 的第二种写法（使用箭头函数）
  //   this.setState((prevState, props) => (
  //     {
  //     counter: prevState.counter + props.increment
  //   }
  // ))
  // 普通函数写法
  //   this.setState(function (prevState, props) {
  //     return {
  //       counter: prevState.counter + props.increment      
  //     }
  //   })
  }
  // render 里的才需要 state
  // 2.Clock组件需要展示的内容 5.根据更新数据重新渲染

  render () {
    return (
      <div>
        <h1>hello, clockClass, {this.state.name}</h1>
        <h2>time is {''} { this.state.date.toLocaleTimeString() }</h2>
      </div>
    )
  }
}

// class UserGreeting extends React.Component {
//   render () {
//     return <h1>welcome back!</h1>
//   }
// }
// class GuestGreeting extends React.Component {
//   render () {
//     return <h1>please sign up</h1>
//   }
// }
// class Greeting extends React.Component {
//   render () {
//     const isLogin = this.props.isLogin
//     if (isLogin) {
//       return <UserGreeting/>
//     } else {
//       return <GuestGreeting/>
//     }
//   }
// }

function UserGreeting() {
    return <h1>welcome back!</h1>
}
function GuestGreeting() {
    return <h1>please sign up</h1>
}
function Greeting(props) {
  const isLogin = props.isLogin
  if (isLogin) {
    return <UserGreeting/>
  } else {
    return <GuestGreeting/>
  }
}

function LoginButton(props) {
  return (
      <button onClick={props.onClick}>login</button>
  )
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>logout</button>
    )
}

// LoginControl 有状态组件 要处理button onClick事件
class LoginControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: true
    }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLoginClick () {
    console.log('login')
    this.setState({
        isLogin: false
    })
  }
  handleLogoutClick () {
    console.log('logout')
    this.setState({
    isLogin: true
    })
  }
  render () {
    const isButton = this.state.isLogin
    let button = null
    if (isButton) {
      button = <LogoutButton onClick={this.handleLoginClick}/>
    } else {
      button = <LoginButton onClick={this.handleLogoutClick}/>
    }
    return (
      <div>
        <Greeting isLogin={this.state.isLogin}/>
          {/*元素变量：用变量来存储元素，有条件渲染组件的一部分*/}
          {button}
      </div>
    )
  }
}


// 组件应该自己更新自己的状态。
function App() {
  return (
    <div>
      <Clock/>,
      <Clock/>
    </div>
  )
}

// 实际：有状态组件更新方式！React 只会更新必要的部分
function tick () {
  // const element = (
  //   <div>
  //     <h1>hello, element</h1>
  //     <h2>time is {''} { new Date().toLocaleTimeString() }</h2>
  //   </div>
  // )
  ReactDOM.render(
    // element,
    <App/>,// 3.当Clock渲染到DOM,调用 componentDidMount 钩子,在其内部调用 tickInside
    document.getElementById('root')
  )
}
// const element = <h1>{ getGreetings(user) }</h1>
// const element = <Welcome name="Sara" /> 也可以是用户自定义的

// 事件处理
// 两点不同：1.事件名（驼峰法则）
//          2.传入函数作为事件处理函数，而不是字符串
class Toggle extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        buttonState: true
      }
      // This binding is necessary to make `this` work in the callback
      // 类的方法默认是不会绑定 this (这一步必须)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
      // 1.箭头函数写法
      this.setState((prevState) => ({
        buttonState: !prevState.buttonState
      }))
      //  2.基本写法
      // this.setState(function (prevState) {
      //   console.log(prevState.buttonState)
      //   return {
      //     buttonState : !prevState.buttonState
      //   }
      // })
    }

  render () {
    return (
      <button onClick={this.handleClick}>{this.state.buttonState ? '开' : '关'}</button>
    )
  }
}

// const element = (<Toggle/>)
// const login = {
//   isLogin: true
// }
// const element = (<Greeting isLogin={login.isLogin}/>)
const element = (<LoginControl/>)
ReactDOM.render(
  // <h1>hello React</h1>,
  element,
  // <Clock/>,  
  // <App />,
  // a “root” DOM
  document.getElementById('root')
)
// setInterval(tick, 2000)
// setTimeout(tick, 1000);

// data flows down 单向数据流
// state 定义于某组件，使用于该组件
// fatherComponent ------state as props------>sonComponent