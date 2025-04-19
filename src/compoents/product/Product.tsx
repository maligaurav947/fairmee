import ProductCard from "../product/ProductCard";
import products from "../../utilities/Product";

const Product = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 min-h-screen text-gray-800 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bg-pink-200 opacity-20 rounded-full w-72 h-72 top-[-4rem] left-[-4rem] blur-3xl animate-pulse"></div>
        <div className="absolute bg-blue-200 opacity-20 rounded-full w-96 h-96 bottom-[-4rem] right-[-4rem] blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Heading */}
      <section className="pt-20 pb-10 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our full collection of premium items tailored to meet your
          everyday and luxury needs.
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-6 sm:px-12 lg:px-24 pb-20 relative z-10">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
