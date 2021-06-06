import React from "react";
import ProductData from './productdata';
import ProductView from '../../components/product-view/product-view';

class ProductPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            products: ProductData
        }
    }

    

    render(){
        return(
           <div>
               {
                this.state.products.map(product=>(
                    <ProductView key={product.id} category={product.category} items={product.items}/>
                    
                ))
               }
           </div>
        )
    }
}

export default ProductPage;