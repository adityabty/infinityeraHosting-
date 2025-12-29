import React from 'react';
import { X } from 'lucide-react';

export default function RechargeModal({ onClose, onRecharge }) {
  const pricingPlans = [
    { name: 'Starter', credits: 100, price: 99 },
    { name: 'Pro', credits: 500, price: 449 },
    { name: 'Enterprise', credits: 1500, price: 1199 }
  ];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recharge Credits</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {pricingPlans.map((plan, idx) => (
            <button 
              key={idx}
              onClick={() => onRecharge(plan.credits)}
              className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition text-left"
            >
              <div className="text-2xl font-bold mb-1">₹{plan.price}</div>
              <div className="text-purple-400">{plan.credits} Credits</div>
            </button>
          ))}
        </div>
        <div className="bg-blue-600/20 border border-blue-600/40 rounded-lg p-4">
          <p className="text-sm text-blue-200">Payment methods: UPI, Cards, Net Banking</p>
        </div>
      </div>
    </div>
  );
                }
