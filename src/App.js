import React from 'react';
import Cart from './Cart'
import Navbar from './navbar'
import './App.css';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 9999,
          title: 'laptop',
          qty: 18,
          img: '',
          id: 3
        }
      ]
    }
  }

    handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState(
        {
          products: products
        }
      )
    }
    handleDecreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      if (products[index].qty != 0) {
        products[index].qty -= 1;
        this.setState(
          {
            products: products
          }
        )
      }

    }
    handleDelete = (id) => {
      const { products } = this.state;
      const items = products.filter((item) => item.id !== id);
      this.setState({
        products: items
      })
    }
    getcount= ()=>
    {
      const{products} =this.state;
      let count=0;
      products.forEach((product) =>
      {
        count+=product.qty
      }
      )
      return count;
    }
    getCartTotal =()=>
    {
      const{products} =this.state;
      let count=0;
      products.forEach((product) =>
      {
        count+=product.qty * product.price
      }
      )
      return count;

    }
    render(){

      const {products}=this.state;
      return (
        <div className="App">
          <Navbar  count={this.getcount()}/>
          <Cart 
          product={products} key={products.id} 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}/>
          <div style={{ backgroundColor: 'blue', padding: 10, color: 'white', fontSize: 25 }}>
          TOTAL: {this.getCartTotal()}
        </div>
        </div>
      );
    }
  }

  export default App;
