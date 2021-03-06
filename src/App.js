import React from 'react';
import Cart from './Cart'
import Navbar from './navbar'
import './App.css';
import firebase from 'firebase';
class App extends React.Component {


  constructor() {
    super();
    this.state = {
      products: [
      ],
      loading :true
    }
  }
componentDidMount()
{
  firebase
  .firestore()
  .collection('products')
  .onSnapshot((snapshot) =>{ // on snapshot reflect real time chnages
    console.log(snapshot);

    snapshot.docs.map((doc) =>{
      console.log(doc.data())
    });
    const products = snapshot.docs.map((doc) =>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
    })
this.setState({

  products,      //equavilent to products: products
  loading: false
})

  })
  /*.get()
  .then((snapshot) =>{
    console.log(snapshot);

    snapshot.docs.map((doc) =>{
      console.log(doc.data())
    });
    const products = snapshot.docs.map((doc) =>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
    })
this.setState({

  products,      //equavilent to products: products
  loading: false
})

  })*/
}
    handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);

     /* products[index].qty += 1;
      this.setState(
        {
          products: products
        }
      )*/
      const docRef = firebase.firestore().collection('products').doc(products[index].id);
      docRef.update({
        qty:products[index].qty+1
      })
    .then(()=>{

      console.log('updated successfully');
    }).catch((error)=>
    {
      
      console.log('error' , error);
    })
    }
    handleDecreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      /*
      if (products[index].qty != 0) {
        products[index].qty -= 1;
        this.setState(
          {
            products: products
          }
        )
      }*/
      const docRef = firebase.firestore().collection('products').doc(products[index].id);
      docRef.update({
        qty:products[index].qty-1
      })
    .then(()=>{

      console.log('updated successfully');
    }).catch((error)=>
    {
      
      console.log('error' , error);
    })

    }
    handleDelete = (id) => {
      const { products } = this.state;
     /* const items = products.filter((item) => item.id !== id);
      
      this.setState({
        products: items
      })*/
      const docRef = firebase.firestore().collection('products').doc(id);
      docRef.delete().then(()=>{

        console.log('updated successfully');
      }).catch((error)=>
      {
        
        console.log('error' , error);
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

    addProduct=()=>
    {
      firebase
      .firestore()
      .collection('products')
      .add({
        img:'',
        price:900,
        qty:4,
        title:'washing machine'
      })
      .then((docRef)=>{
        console.log(docRef);
      })
      .catch((error)=>
      {
        console.log(error);
      })
    }
    render(){

      const {products , loading}=this.state;
      return (
        <div className="App">
          <Navbar  count={this.getcount()}/>
          <button onClick={this.addProduct}>add products</button>
          <Cart 
          product={products} key={products.id} 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}/>
          {loading && <h1>LoADING PRODUCTS....</h1>}
          <div style={{ backgroundColor: 'blue', padding: 10, color: 'white', fontSize: 25 }}>
          TOTAL: {this.getCartTotal()}
        </div>
        </div>
      );
    }
  }

  export default App;
