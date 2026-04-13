
import "./Product.css"
const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="image" style={{ backgroundImage: `url(${product.image})`, opacity: product.stockAvailable < 1 ? 0.5 : 1 }}>
                <div className={product.stockAvailable < 1 ? "out-of-stock" : "in-stock"}>Out of Stock</div>
            </div>
            <h2>{product.productName}</h2>
            <p>Price: {product.cost}</p>
            <p>Available Stock: {product.stockAvailable}</p>
        </div>
    )
}
export default Product;