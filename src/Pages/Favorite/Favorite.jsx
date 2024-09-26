import React from 'react';
import { useFavorites } from '../../Context/FavoriteContext'; // Импортируем корректно
import './About.scss';
import { ProductCard } from '../../Components/ProductCard/ProductCard';


export const Favorite= () => {
  const { favorite } = useFavorites(); 
  if (!favorite || favorite.length === 0) {
    return <p>No favorites available</p>;
  }

 return(
    <div className='favorite-list'>
        {favorite.map(product => (
            <ProductCard key={product.id} product={product}/>
        ) )}
    </div>
 )
}
export default Favorite;

