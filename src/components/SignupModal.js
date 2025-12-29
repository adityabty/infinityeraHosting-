import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function SignupModal({ onClose, onSignup, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSignup(name, email, password);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg mb-4 text-white" 
          />
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
            Create Account
          </button>
        </div>
        <p className="text-center mt-4 text-gray-400">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="text-purple-400">
            Login
          </button>
        </p>
      </div>
    </div>
  );
              }
