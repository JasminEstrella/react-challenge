import { useState, useEffect } from "react"
import './index.css';
import 
// import handleProductId from "./Product";
// import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function FetchApi() {

    const [message, setMessage] = useState('');
    const [productData, setProductData] = useState([]);
    console.log("rendered")
    const [count, setCount] = useState(0)


    useEffect(() => {
        // Fetch data from Node.js backend

    }, []);

    console.log(message);

    return (
        <div>
            <div>Fetch Count {count}</div>
            <h1>Fetch</h1>
            <h1>{message}</h1>
            <button>HAAHAHHA {count} HAHAHA </button>
            <Products products={productData}/>
        </div>
    )
}


function Products({products}) {
    return (
        <div>

            {
                products.map((product) => <ProductList productId={product.id} productName={product.productName} key={product.productName}></ProductList> )
            }
        </div>
    )
}




function ProductList({productId, productName}) {

    const [product, setProduct] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    function handleProductId(productId) {

        fetch(`http://localhost:8000/product/${productId}`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data);
        })
        .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="product">
            <span className="name">{productName}</span>
            <button onClick={() => handleProductId(productId)}>See details</button>

{
    console.log(product)
}
            {
                
                product.data && (
                    <div className="product">
                        <div>Name: {product.data.productName} {product.data.image}</div>
                        <div>Country: {product.data.from}</div>
                        <div>Nutrients: {product.data.nutrients}</div>
                        <div>Price: {product.data.price}</div>
                        <div>Quantity: {product.data.quantity}</div>
                        <div>{ (product.data.organic) ? "Organic": "Not Organic"}</div>
                        <div>Description: {product.data.description}</div>
                    </div>
                )
            }
        </div>
    )
}

// function Product({product}) {
//     return (
//         <div className="product">
//             <div>Name: {product.productName} {product.image}</div>
//             <div>Country: {product.from}</div>
//             <div>Nutrients: {product.nutrients}</div>
//             <div>Price: {product.price}</div>
//             <div>Quantity: {product.quantity}</div>
//             <div>{ (product.organic) ? "Organic": "Not Organic"}</div>
//             <div>Description: {product.description}</div>
//         </div>
//     )
// }