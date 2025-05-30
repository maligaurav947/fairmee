import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../utilities/Product";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Product } from "../../utilities/ProductProps";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Find the current product
    const currentProduct = products.find((p) => p.id === id) as Product;

    if (currentProduct) {
      setProduct(currentProduct);
      setSelectedImage(currentProduct.images[0]);
    }

    // Get similar products
    const similar = products.filter((p) => p.id !== id) as Product[];
    setSimilarProducts(similar);
  }, [id]);

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">Product not found.</div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-white to-pink-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-6 md:p-10">
        {/* Image Gallery */}
        <div>
          <div className="mb-4 border rounded-lg overflow-hidden">
            <Zoom>
              <img
                src={selectedImage}
                alt={product.name}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </Zoom>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`min-w-[5rem] h-20 object-cover border rounded-lg cursor-pointer hover:ring-2 transition-all duration-300 ${
                  selectedImage === img ? "ring-2 ring-blue-500" : ""
                }`}
                alt={`Thumbnail ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {product.name}
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            {product.description}
          </p>

          <div>
            <h3 className="text-base font-semibold text-gray-800">
              Ingredients
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {product.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800">Skin Type</h3>
            <p className="text-gray-700 text-sm">{product.skinType}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800">
              Directions
            </h3>
            <p className="text-gray-700 text-sm">{product.directions}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800">Warnings</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {product.warnings.map((warning, i) => (
                <li key={i}>{warning}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
            <p>
              Made in{" "}
              <span className="font-medium text-gray-800">
                {product.madeIn}
              </span>
            </p>
            <p>
              Brand:{" "}
              <span className="font-medium text-gray-800">{product.brand}</span>
            </p>
          </div>

          {/* External Links */}
          <div className="space-y-3 sm:space-x-4 sm:space-y-0 mt-6 flex flex-col sm:flex-row">
            <a
              href={product.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#FF9900] hover:bg-[#e88e00] text-black font-bold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Buy on Amazon
            </a>

            <a
              href={product.meeshoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#FF4DA8] to-[#FF84C1] hover:opacity-90 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Buy on Meesho
            </a>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 ? (
        <div className="mt-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Similar Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/products/${p.id}`}>
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-48 object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {p.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No similar products found.
        </p>
      )}
    </div>
  );
};

export default ProductDetails;
