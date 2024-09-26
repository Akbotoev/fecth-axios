// import { createContext, useContext, useState } from "react";

// const FavoriteContext = createContext();

// export const useFavorites = () => useContext(FavoriteContext);

// export const FavoriteProvider = ({children}) => {
//     const [ favorite, setFavorite ] = useState([])
// };

// const addProduct = (product) => {
//     setFavorite((prevFavorite) => [...prevFavorite, product]);
// };

// const removeFavorite = (productId) => {
//     setFavorite((prevFavorite) => prevFavorite.filter(p => p.id !== productId));


// return(
//     <FavoriteContext.Provider value={{favorite, addProduct,removeFavorite}}>
//         {children}
//     </FavoriteContext.Provider>
// )
// };

import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addProduct = (product) => {
    setFavorite([...favorite, product]);
  };

  const removeFavorite = (productId) => {
    setFavorite(favorite.filter(p => p.id !== productId));
  };

  return (
    <FavoritesContext.Provider value={{ favorite, addProduct, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

