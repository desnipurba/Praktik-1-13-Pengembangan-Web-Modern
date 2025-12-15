import Button from '../Button/Button';
import './ProductCard.css';

const CategoryBadge = ({ category }) => <div className="cat-badge">{category}</div>;

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <CategoryBadge category={product.category} />
      <img src={product.image} alt={product.name} />
      <div className="prod-body">
        <h4>{product.name}</h4>
        <p className="price">{product.price}</p>
        {product.stock > 0 ? (
          <Button label="Tambah ke Keranjang" variant="success" onClick={() => onAdd(product.id)} />
        ) : (
          <Button label="Stok Habis" variant="gray" />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
