import React from './Pricing.css'; // Import your custom CSS

const Pricing = () => {
  return (
    <section className="pricing py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pricing-plan bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p>$10/month</p>
            <a href="/pricing" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="pricing-plan bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p>$25/month</p>
            <a href="/pricing" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="pricing-plan bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p>Contact Us</p>
            <a href="/pricing" className="text-blue-500 hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
