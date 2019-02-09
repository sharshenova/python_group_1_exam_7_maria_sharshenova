import React, { Component } from 'react';
import './App.css';
import ItemsForm from './Components/ItemsForm/ItemsForm';
import Order from './Components/Order/Order';
import TotalPrice from './Components/Order/TotalPrice/TotalPrice';

const availableItems = [
  {name: 'hamburger', price: 80, label: 'Hamburger'},
  {name: 'coffee', price: 70, label: 'Coffee'},
  {name: 'cheeseburger', price: 90, label: 'Cheeseburger'},
  {name: 'tea', price: 50, label: 'Tea'},
  {name: 'fries', price: 45, label: 'Fries'},
  {name: 'cola', price: 40, label: 'Cola'}
];

class App extends Component {
  state = {
    items: [
      {name: 'hamburger', count: 0, total: 0},
      {name: 'coffee', count: 0, total: 0},
      {name: 'cheeseburger', count: 0, total: 0},
      {name: 'tea', count: 0, total: 0},
      {name: 'fries', count: 0, total: 0},
      {name: 'cola', count: 0, total: 0}
    ],
    totalPrice: 0
  };

  addItem = (name) => {
      const newItem = this.state.items.map(currentItem => {
          if (currentItem.name === name) {
              currentItem.count += 1;
              let price = availableItems.find(item => item.name === currentItem.name).price;
              currentItem.total = currentItem.count * price;
          }
          return currentItem;
      });
      this.setState({items: newItem});
      this.countTotalPrice();
  };

  removeItem = (name) => {
      const newItem = this.state.items.map(currentItem => {
          if (currentItem.name === name){
              currentItem.count -= 1;
              let price = availableItems.find(item => item.name === currentItem.name).price;
              currentItem.total = currentItem.count * price;
          }
          return currentItem;
      });
      this.setState({items: newItem});
      this.countTotalPrice();
  }; 

  countTotalPrice = () => {
    let items = [...this.state.items];
    let totalPrice = items.reduce((sum, item) => sum + item.total, 0);
    this.setState({totalPrice: totalPrice});
  }

  render() {
    return (
      <div className="Container">
          <ItemsForm items={availableItems} addItem={this.addItem}/>
          <Order items={this.state.items} removeItem={this.removeItem}/>
          <TotalPrice totalPrice={this.state.totalPrice}/>
      </div>
    );
  }
}

export default App;
