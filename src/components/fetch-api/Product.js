import { useState, useEffect } from "react";



const handleProductId = (productId) => {
    // const [product, setProduct] = useState([]);
    console.log(productId)
        // Fetch data from Node.js backend
        fetch(`http://localhost:8000/product/${productId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('here ', data)
            // setProduct(data)
        })
        .catch((error) => console.error('Error:', error));
        
        // return (
        //     <div className="product">
        //         {/* <div>Name: {product.productName} {product.image}</div>
        //         <div>Country: {product.from}</div>
        //         <div>Nutrients: {product.nutrients}</div>
        //         <div>Price: {product.price}</div>
        //         <div>Quantity: {product.quantity}</div>
        //         <div>{ (product.organic) ? "Organic": "Not Organic"}</div>
        //         <div>Description: {product.description}</div> */}
        //     </div>
        // )
    };

    export default handleProductId;