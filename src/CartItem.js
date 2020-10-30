import React from 'react';
class CartItem extends React.Component {
    /*constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }*/
    decreaseQuantity = () => {
        const{qty} =this.state;
        if(qty==0)
        return
        this.setState({
            qty: this.state.qty - 1
        })
    }
    increaseQuantity = () => {
        console.log('asdfgh');
        this.setState  ({
            qty: this.state.qty + 1
        })
    }
    render() {
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "grey" }}>{price}</div>
                    <div style={{ color: "grey" }}>Qty:{qty}</div>
                    <div className="cart-item-action">
                        <img alt="decrease"
                            className="action-icons"
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                            onClick={this.decreaseQuantity}
                        />
                        <img alt="increase"
                            className="action-icons"
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity}
                        />

                        <img alt="delete"
                            className="action-icons"
                            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"

                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }


}

export default CartItem;