import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.component {
  render () {
    return (
      <div className="shopping-list">
        <h1>Shopping List for { this.props.name }</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>QQ</li>          
        </ul>
      </div>
    )
  }
}