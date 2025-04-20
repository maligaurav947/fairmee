import { Link } from "react-router-dom";
import { Product } from "../../utilities/ProductProps";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg transition-transform transform  hover:shadow-2xl overflow-hidden relative group">
      {/* Image */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-56 object-contain "
        />
      </Link>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

        {/* View Details Button */}
        <Link
          type="button"
          to={`/products/${product.id}`}
          className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
