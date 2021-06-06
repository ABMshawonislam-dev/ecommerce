import React from "react";
import { withRouter } from "react-router-dom";
import "./product-details.scss"

const ProductDetails = (props) => (
    <h1 onClick={()=> props.history.push(props.url)}>{props.title}</h1>
)

export default withRouter(ProductDetails);