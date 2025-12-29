import { Zap, CreditCard, Menu, X, LogOut } from "lucide-react";

export default function Navbar({
  credits,
  setShowMenu,
  showMenu,
  setIsLoggedIn
}) {
  return (
    <nav className="bg-black bg-opacity-30 backdrop-blur-md border-b border-white border-opacity-10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="text-white font-bold text-xl hidden sm:block">
              InfinityEra
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span>{credits} Credits</span>
            </div>

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white lg:hidden"
            >
              {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="hidden lg:flex items-center space-x-2 text-white hover:text-yellow-400 transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
