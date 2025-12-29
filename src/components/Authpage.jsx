import { Zap, Server, Github, CreditCard } from "lucide-react";
import { pricingPlans } from "../data/pricingPlans";

export default function AuthPage({
  currentPage,
  setCurrentPage,
  loginData,
  setLoginData,
  handleLogin
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* NAV */}
      <nav className="bg-black bg-opacity-30 backdrop-blur-md border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-yellow-400" />
              <span className="text-white font-bold text-xl">
                InfinityEra Hosting
              </span>
            </div>

            <button
              onClick={() =>
                setCurrentPage(currentPage === "home" ? "pricing" : "home")
              }
              className="text-white hover:text-yellow-400 transition"
            >
              {currentPage === "home" ? "Pricing" : "Home"}
            </button>
          </div>
        </div>
      </nav>

      {/* HOME PAGE */}
      {currentPage === "home" && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl sm:text-6xl text-white font-bold text-center mb-6">
            Deploy Your Telegram Music Bots
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* LOGIN */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl border border-white border-opacity-20">
              <h2 className="text-2xl font-bold text-white mb-6">Login</h2>

              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg mb-3 bg-white bg-opacity-20 border border-white border-opacity-30 text-white"
              />

              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg mb-4 bg-white bg-opacity-20 border border-white border-opacity-30 text-white"
              />

              <button
                onClick={handleLogin}
                className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg"
              >
                Login
              </button>
            </div>

            {/* SIGNUP */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl border border-white border-opacity-20">
              <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>

              <button
                onClick={handleLogin}
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      }
