import React from 'react';

export default function Pricing({ onSignup }) {
  const pricingPlans = [
    {
      name: 'Starter',
      credits: 100,
      price: 99,
      features: ['1 Bot Instance', '512MB RAM', '10GB Bandwidth', 'Basic Support']
    },
    {
      name: 'Pro',
      credits: 500,
      price: 449,
      popular: true,
      features: ['5 Bot Instances', '2GB RAM', '50GB Bandwidth', 'Priority Support']
    },
    {
      name: 'Enterprise',
      credits: 1500,
      price: 1199,
      features: ['Unlimited Bots', '8GB RAM', 'Unlimited Bandwidth', '24/7 Support']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Credit-Based Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
              plan.popular ? 'border-purple-500 relative' : 'border-white/10'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-1">₹{plan.price}</div>
            <div className="text-purple-400 mb-6">{plan.credits} Credits</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-xs">
                    ✓
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={onSignup} 
              className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
              }
