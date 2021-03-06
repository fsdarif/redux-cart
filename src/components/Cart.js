import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/action/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div className="cart">
            <h3>Total item added : {cart.length} </h3>
            <ul>
                {
                     cart.map((pd) => <li key={pd.cartId}>
                         {pd.name} <button onClick={() => removeFromCart(pd.cartId)}>X</button>
                         </li>)
                }
            </ul>
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);