import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:41765/api/products')  // Use correct backend URL
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.image_url} alt={product.name} width="150" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
