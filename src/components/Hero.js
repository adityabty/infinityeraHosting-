import React from 'react';

export default function Hero({ onSignup }) {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Host Your Telegram Music Bots
        <span className="block text-purple-400 mt-2">With Ease</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Deploy, manage, and scale your Telegram music bots on our high-performance 
        infrastructure. 64GB VPS power at your fingertips.
      </p>
      <button 
        onClick={onSignup} 
        className="px-8 py-4 bg-purple-600 rounded-xl text-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105"
      >
        Get Started Free
      </button>
    </div>
  );
          }
