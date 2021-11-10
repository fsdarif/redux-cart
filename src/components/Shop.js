import React from 'react';
import Product from './Product';
import {addToCart} from '../redux/action/cartActions';
import {connect} from 'react-redux';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div className="shop products">
            {
            products.map(product => 
            <Product key={product.id} product={product}
            addToCart={addToCart}
            >
            </Product>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);