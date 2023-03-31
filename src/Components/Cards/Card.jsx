import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Card.css'

const Card = () => {
    const [knowledge , setKnowledge] = useState([])
    const [read, setRead] = useState() 

    useEffect(()=>{
        fetch('info.json')
        .then(res => res.json())
        .then(res => setKnowledge(res))

    },[]);

    
    const handleAddToCart = (knowledge) => {
        const newRead = [...read,knowledge]
        setRead(newRead)
    }


    return (
        <div className='card-container'>
            <div className="knowledge-container">
            {
                knowledge.map(knowledge => <Product
                key={knowledge.id}
                knowledge = {knowledge}
                handleAddToCart = {handleAddToCart}
                ></Product>)
            }
            </div>

            {/* Answers is here in Bookmarked Blogs */}
            <div className="summary-container">
                <a href="/src/blogs.html">Bookmarked Blogs</a>
            </div>
        </div>
    );
};

export default Card;
