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
  date: new Date()
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
class Avatar extends React.Component {
  render () {
    return <img className="Avatar" src={ this.props.author.avatarUrl } alt={ this.props.author.name }/>
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
      <Avatar author={cc.author}/>
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
const element = <Comment date={cc.date} text={cc.text} author={cc.author}/>

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
function tick () {
  const element = (
    <div>
      <h1>hello, element</h1>
      <h2>time is {''} { new Date().toLocaleTimeString() }</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}
// const element = <h1>{ getGreetings(user) }</h1>
// const element = <Welcome name="Sara" /> 也可以是用户自定义的

ReactDOM.render(
  // <h1>hello React</h1>,
  element,
  // <App />,
  // a “root” DOM
  document.getElementById('root')
)
setInterval(tick, 1000)
// setTimeout(tick, 1000);