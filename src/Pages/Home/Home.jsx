import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss'
import ProductCard from '../../Components/ProductCard/ProductCard';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
        setProducts(response.data);
        setLoading(false);
    })
    .catch(error => console.error('Error fetchinf error' + error))
  },[]);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="container">
      <div className='product-list'>
        {products.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default Home;

