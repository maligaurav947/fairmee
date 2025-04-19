import ProductCard from "../product/ProductCard";
import products from "../../utilities/Product.js";
import mainImage from "../../assets/mainimg.jpg";
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-white to-pink-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Discover Premium Products
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Hand-picked high-quality items to elevate your lifestyle. Explore
              the best, just for you.
            </p>
          </div>

          {/* Optional hero image */}
          <div className="flex-1 hidden md:block">
            <img
              src={mainImage}
              alt="Featured Product"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Featured Collection</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          From skincare essentials to luxurious treats, discover the items
          everyone is raving about.
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-6 sm:px-12 lg:px-24 pb-20">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
