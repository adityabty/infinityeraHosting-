import { X, CreditCard } from "lucide-react";
import { pricingPlans } from "../data/pricingPlans";

export default function BuyCreditsModal({
  setShowCreditModal,
  buyCredits
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl border border-white border-opacity-20 max-w-md w-full">
        
        {/* MODAL HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-yellow-400" />
            Buy Credits
          </h2>

          <button
            onClick={() => setShowCreditModal(false)}
            className="text-white hover:text-yellow-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-300 mb-4">
          Choose a plan to add more deployment credits.
        </p>

        {/* PLANS LIST */}
        <div className="space-y-3">
          {pricingPlans.map((plan) => (
            <button
              key={plan.name}
              onClick={() => buyCredits(plan.credits)}
              className="w-full bg-white bg-opacity-10 hover:bg-opacity-20
              border border-white border-opacity-20 rounded-xl p-4 text-left transition"
            >
              <div className="flex justify-between items-center">
                
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {plan.name}
                  </h3>

                  <p className="text-gray-300 text-sm">
                    {plan.credits} Credits — {plan.duration}
                  </p>
                </div>

                <div className="text-yellow-400 font-bold text-xl">
                  ₹{plan.price}
                </div>
              </div>

              {plan.popular && (
                <span className="text-xs text-black bg-yellow-400 px-2 py-1 rounded-md mt-2 inline-block">
                  Most Popular
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
        }
