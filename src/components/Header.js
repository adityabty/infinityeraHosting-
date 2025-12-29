import React from 'react';
import { Menu, X, Server } from 'lucide-react';

export default function Header({ onLogin, onSignup, menuOpen, setMenuOpen }) {
  return (
    <>
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Server className="w-8 h-8 text-purple-400" />
          InfinityEra Hosting
        </div>
        <div className="hidden md:flex gap-4">
          <button 
            onClick={onLogin} 
            className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            Login
          </button>
          <button 
            onClick={onSignup} 
            className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black/50 p-4">
          <button 
            onClick={() => { onLogin(); setMenuOpen(false); }} 
            className="block w-full px-6 py-2 mb-2 bg-white/10 rounded-lg"
          >
            Login
          </button>
          <button 
            onClick={() => { onSignup(); setMenuOpen(false); }} 
            className="block w-full px-6 py-2 bg-purple-600 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      )}
    </>
  );
    }
