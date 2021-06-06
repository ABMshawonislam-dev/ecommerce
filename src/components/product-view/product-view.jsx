import React from 'react';
import './product-view.scss';

const ProductView = (props)=>(
   
    <div>
        <h1>{props.category}</h1>
        <div className="product-list">
        {props.items.map(item=>(
            <h3 className="product-name" key={item.id}>{item.id}. {item.title}</h3>
            
        ))}
        </div>
    </div>
)
export default ProductView;