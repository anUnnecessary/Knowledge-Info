import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,title,img,read,published,author} = props.knowledge;
    const handleAddToCart = props.handleAddToCart


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h5>{read}</h5>

            <div className='author'>
            <h3 className='product-name'>{name}</h3>
            <img className='author-icon' src={author} alt="" />
            </div>
            

            <h6>{published}</h6>
            <h3>{title}</h3>
            </div>
            <button onClick={()=>handleAddToCart(props.knowledge)}>Mark as read</button>

        </div>
    );
};

export default Product;