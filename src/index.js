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
// const element = (<LoginControl/>)
// 列表list
function NumberList(props) {
    const numbers = props.numbers
    // 创建一个元素，必须包括一个特殊的key属性 (key是独一无二的)
    // Keys可以在DOM中的某些元素 增加或删除时，帮助React识别哪些 元素 发生了变化
    // 所设计的数据表结构中应该带有id (index索引可以消除报错，但不推荐)
    const listItems = numbers.map((number, index) => <li key={index}>{number * 3}</li>)
    return (
        <ul>{listItems}</ul>
    )
}


const numbers = [1, 1, 3, 5]
// const listItems = numbers.map(number => <li>{number * 2}</li>)
// const element = (<NumberList numbers={numbers}/>)

// form 表单元素保留一些内部状态
// 但是在 React 中，只能由setState()进行更新 这种方式成为 受控组件
class NameForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            inputvalue: '',
            description: '',
            select: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleTextarea = this.handleTextarea.bind(this)
        // this.handleSelect = this.handleSelect.bind(this)
    }
    // 使用"受控组件",每个状态的改变都有一个与之相关的处理函数，这样就可以直接修改或者验证用户输入
    // 每次按键触发handleChange 来更新当前的state
    handleChange (event) {
      // console.log(event.target.name)
      const name = event.target.name
      const value = (name === 'inputvalue' ? event.target.value: (name === 'description' ? event.target.value: event.target.value))
      //  2. 若一个form里面多个input时， 可使用input来判断对应value
      //   const value = (event.target.type === 'input' ? event.target.value: (event.target.type === 'textarea' ? event.target.value: event.target.value))
        console.log(value)
      this.setState({
        [name]: value
      })
    }
    handleSubmit (event) {
        console.log('submit:' + this.state.inputvalue + '==' + this.state.description + '==' + this.state.select)
        // 不执行与事件关联的默认动作
        event.preventDefault()
    }
    // handleTextarea (e) {
    //     this.setState({
    //         description: e.target.value
    //     })
    // }
    // handleSelect (e) {
    //     this.setState({
    //         select: e.target.value
    //     })
    // }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:<input placeholder="input!"
                                   onChange={this.handleChange}
                                   type="text"
                                   value={this.state.inputvalue}
                                   name="inputvalue"/></label><br/>
                <label>description:<textarea placeholder="textarea!"
                                             onChange={this.handleChange}
                                             value={this.state.description}
                                             name="description"></textarea></label><br/>
                <label>select:<select onChange={this.handleChange}
                                      value={this.state.select}
                                      name="select">
                    <option>apple</option>
                    <option>tesla</option>
                    <option>lexus</option>
                </select></label>
                <input type="submit" value="SubmitForm" />
            </form>
        )
    }
}
// const element = (<NameForm/>)

// 状态提升
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p style={{color:'red'}}>boiling!</p>
    } else {
        return <p style={{color:'blue'}}>Not boiling</p>
    }
}
class Calculator extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            temp: '',
            unit: 'c'
        }
        this.handleFChange = this.handleFChange.bind(this)
        this.handleCChange = this.handleCChange.bind(this)
    }
    handleFChange (temp) {
        this.setState({
            temp: temp,
            unit: 'f'
        })
    }
    handleCChange (temp) {
        this.setState({
            temp: temp,
            unit: 'c'
        })
    }

    render() {
        const unit = this.state.unit
        const temp = this.state.temp
        const celsius = unit === 'f' ? tryConvert(temp, toCelsius) : temp;
        const fahrenheit = unit === 'c' ? tryConvert(temp, toFahrenheit) : temp;
        return (
            <div>
                <TempInput unit="c"
                           temp={celsius}
                           onTempChange={this.handleCChange}/>
                <TempInput unit="f"
                           temp={fahrenheit}
                           onTempChange={this.handleFChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

// 1. 两个组件大体一致，所以可以从 <Calculator/> 中抽离出来
// 2. 状态提升：数据流的特性 要求我们把 state 提升到父组件
// 即：把原来子组件 中使用的state 更换为 props，并提升state 到父组件
class TempInput extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     temp: ''
        // }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        // this.setState({
        //     temp: e.target.value
        // })
        // state 属于 父组件中， 子组件不能直接更改
        this.props.onTempChange(e.target.value)
        // console.log(parseFloat(e.target.value))
    }

    // 定义的temp 字符串 要转换为 浮点数
    render() {
        // 不需要更新状态的数据
        const temp = this.props.temp
        const unit = this.props.unit
        return (
            <fieldset>
                <legend>输入{unitObj[unit]}温度</legend>
                <input type="number" onChange={this.handleChange} value={temp}/>
                {/*<BoilingVerdict celsius={parseFloat(this.state.temp)}/>*/}
            </fieldset>
        )
    }
}
const unitObj = {
    c: "摄氏",
    f: "华氏"
}
// 两个输入框的温度相互转换
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// 该函数接受 温度，并利用上面两个函数进行转化，并输出
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const element = (<Calculator/>)

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

