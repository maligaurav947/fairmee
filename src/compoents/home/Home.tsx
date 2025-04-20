import ProductCard from "../product/ProductCard";
import products from "../../utilities/Product";
import mainImage from "../../assets/mainimg.jpg";
import video1 from "../../assets/videoFirst.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
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
      <section className=" py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-800">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sharda",
                review:
                  "Cream is good. We can use it on daily basis. It keeps screen moisturise and soft. Good to buy and affordable.",
              },
              {
                name: "Chetan Chouhan",
                review:
                  "TI got this cream on 25 th January.i m using it as my night cream and it's working well on my skin. I will update after one month what will happen.",
              },
              {
                name: "Priyanka koli",
                review:
                  "Bohot achha result hai. Face glowup , sunscreen dono kaam ekhi product se ho jata hai.mujhe koi our cream use karne ki zarurat hi nhi padti",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
                <p className="mt-4 font-semibold text-indigo-700">
                  – {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Video Showcase Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-800">
            Watch Our Story
          </h2>
          <p className="text-gray-600 mb-12">
            Get a behind-the-scenes look at how we bring quality and passion
            into every product.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                src: video1,
                title: "Behind the Scenes",
                subtitle: "Crafting every detail",
              },
              {
                src: video2,
                title: "Our Ingredients",
                subtitle: "Nature meets science",
              },
              {
                src: video3,
                title: "Customer Stories",
                subtitle: "Real people, real results",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg bg-black aspect-[9/16] sm:aspect-[4/5] lg:aspect-video"
              >
                {/* Video */}
                <video
                  src={video.src}
                  muted
                  loop
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />

                {/* Always-visible overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none z-10"></div>

                {/* Always-visible text */}
                <div className="absolute bottom-4 left-4 right-4 text-left text-white z-20 pointer-events-none">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-sm text-gray-200">{video.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
            Why Choose Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: "Cruelty-Free", icon: "🐰" },
              { title: "Eco-Friendly Packaging", icon: "🌱" },
              { title: "Dermatologist Tested", icon: "🧴" },
              { title: "Free Shipping", icon: "🚚" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow flex flex-col items-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-indigo-700">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
