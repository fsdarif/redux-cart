import React from 'react';

const Product = ({product, addToCart}) => {
    return (
        <div className="product">
            {product.name} <br/>
            <button 
            onClick={() => 
            addToCart(product.id, product.name)}
            >
            add to cart
            </button>
        </div>
    );
};

export default Product;