import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';

export default function LandingPage({ 
  onLogin, 
  onSignup, 
  menuOpen, 
  setMenuOpen 
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <Header 
        onLogin={onLogin}
        onSignup={onSignup}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Hero onSignup={onSignup} />
      <Features />
      <Pricing onSignup={onSignup} />
    </div>
  );
}
