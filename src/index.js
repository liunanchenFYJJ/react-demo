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
function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

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
const element = <h1>{ getGreetings(user) }</h1>

ReactDOM.render(
  // <h1>hello React</h1>,
  element,
  // a “root” DOM
  document.getElementById('root')
)
setInterval(tick, 1000)