import React from "react";
import ProductDetails from "../product-details/product-details"
import "./product-container.scss"

class ProductContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            item: [
                {
                    id: 1,
                    name: "T-Shirt",
                    url: "/product",
                },
                {
                    id: 2,
                    name: "T-Shirt2",
                    url: "/product",
                },
                {
                    id: 3,
                    name: "T-Shirt3",
                    url: "/product",
                },
                {
                    id: 4,
                    name: "T-Shirt4",
                    url: "/product",
                },
                {
                    id: 5,
                    name: "T-Shirt5",
                    url: "/product",
                },
                {
                    id: 6,
                    name: "T-Shirt6",
                    url: "/product",
                },
                {
                    id: 7,
                    name: "T-Shirt7",
                    url: "/product",
                },
                {
                    id: 8,
                    name: "T-Shirt8",
                    url: "/product",
                },
                {
                    id: 9,
                    name: "T-Shirt9",
                    url: "/product",
                },
                {
                    id: 10,
                    name: "T-Shirt10",
                    url: "/product",
                },
                {
                    id: 11,
                    name: "T-Shirt11",
                    url: "/product",
                },
                {
                    id: 12,
                    name: "T-Shirt12",
                    url: "/product",
                },
            ]
        }
    }
    render(){
        return(
            <>
                {this.state.item.map(item=>(
                    <div className="product_container" key={item.id}>
                    <ProductDetails title={item.name} url={item.url}/>
                    </div>
                    ))}
            </>
        )
    }

}

export default ProductContainer;