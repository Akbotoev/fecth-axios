import { useFavorites } from "../../Context/FavoriteContext"

export const ProductCard = ({product}) => {
    const {  favorite, addProduct, removeFavorite } = useFavorites();

    const isFavorite = favorite.some(fav => fav.id === product.id);
    return(
         
    <section className="product-card">
        <img src={product.image} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <button onClick={() => isFavorite ? removeFavorite(product.id) : addProduct(product)}>
            {isFavorite ? 'Remove from favorite' : 'Add to Favorite'}
        </button>
    </section>
    )
}
export default ProductCard;