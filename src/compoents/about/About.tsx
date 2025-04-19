

const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-white to-pink-100 min-h-screen py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">About Sarvadnya's FairMee</h1>
        
        <p className="text-gray-700 mb-4">
          Welcome to <strong>FairMee</strong>, a platform built with passion and purpose. We're here to promote ethical
          trade, sustainable products, and empower artisans and communities by providing a fair marketplace.
        </p>

        <p className="text-gray-700 mb-4">
          Founded by Sarvadnya, FairMee was born out of a desire to make a difference in the way we shop. Our
          mission is simple: bring transparency, fairness, and sustainability to the forefront of commerce.
        </p>

        <p className="text-gray-700 mb-4">
          Whether you're here to shop mindfully or support small creators, you're part of a movement that values
          people and the planet. We are constantly growing and evolving, and we’re so excited to have you with us
          on this journey.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🌱 Sustainability</li>
          <li>🤝 Fair Trade</li>
          <li>🧵 Handcrafted & Authentic Products</li>
          <li>💜 Community Empowerment</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
