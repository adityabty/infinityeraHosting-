import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function LoginModal({ onClose, onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onLogin(email, password);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg mb-4 text-white" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg mb-6 text-white" 
          />
          <button 
            onClick={handleSubmit} 
            className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </div>
        <p className="text-center mt-4 text-gray-400">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignup} className="text-purple-400">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
              }
