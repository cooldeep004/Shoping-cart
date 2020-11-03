import React from 'react';
import CartItem from './CartItem'
const Cart=(props)=> {
/*
    constructor() {
        super();
        this.state = {
            products:[
                {
                    price: 99,
                    title: 'watch',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 10,
                    img: '',
                    id:2
                },
                {
                    price: 9999,
                    title: 'laptop',
                    qty: 19,
                    img: '',
                    id:3
                }
            ]
        }
    }

    handleIncreaseQuantity=(product)=>{
        const {products} =this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState(
            {
                products:products
            }
        )
    }
    handleDecreaseQuantity=(product)=>{
        const {products} =this.state;
        const index=products.indexOf(product);
        if( products[index].qty !=0)
        {
            products[index].qty-=1;
            this.setState(
                {
                    products:products
                }
            )
        }
       
    }
    handleDelete=(id)=>
    {
        const {products} = this.state;
        const items= products.filter((item)=> item.id!==id);
        this.setState({
            products: items
        })
    }
    */
     const products=props.product;
        return (
            <div className="cart">
            {products.map((product)=>{
                return <CartItem product={product} key={product.id} 
                onIncreaseQuantity={props.onIncreaseQuantity}
                onDecreaseQuantity={props.onDecreaseQuantity}
                onDelete={props.onDelete}
                />
            })}
            </div>

        );
    
}



export default Cart;