import React from './Features.css'; // Import your custom CSS

const Features = () => {
  return (
    <section className="features py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Feature One</h3>
            <p>Description of Feature One.</p>
          </div>
          <div className="feature bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
            <p>Description of Feature Two.</p>
          </div>
          <div className="feature bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
            <p>Description of Feature Three.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
