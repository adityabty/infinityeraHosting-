import React from 'react';
import { Server, CreditCard, User, LogOut, Plus, DollarSign } from 'lucide-react';
import BotCard from './BotCard';

export default function Dashboard({ 
  user, 
  onLogout, 
  onShowDeploy, 
  onShowRecharge,
  onToggleBotStatus,
  onDeleteBot 
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Dashboard Header */}
      <nav className="bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Server className="w-6 h-6 text-purple-400" />
            InfinityEra
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-purple-600/30 px-4 py-2 rounded-lg">
              <CreditCard className="w-5 h-5" />
              <span className="font-semibold">{user.credits} Credits</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{user.name}</span>
            </div>
            <button 
              onClick={onLogout} 
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button 
            onClick={onShowDeploy} 
            className="flex items-center gap-3 bg-purple-600 p-6 rounded-xl hover:bg-purple-700 transition"
          >
            <Plus className="w-8 h-8" />
            <div className="text-left">
              <h3 className="text-xl font-bold">Deploy New Bot</h3>
              <p className="text-purple-200">Deploy from GitHub repository</p>
            </div>
          </button>
          <button 
            onClick={onShowRecharge} 
            className="flex items-center gap-3 bg-green-600 p-6 rounded-xl hover:bg-green-700 transition"
          >
            <DollarSign className="w-8 h-8" />
            <div className="text-left">
              <h3 className="text-xl font-bold">Recharge Credits</h3>
              <p className="text-green-200">Add more credits to your account</p>
            </div>
          </button>
        </div>

        {/* Bots List */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Your Bots</h2>
          {user.bots.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Server className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No bots deployed yet. Deploy your first bot to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {user.bots.map(bot => (
                <BotCard 
                  key={bot.id}
                  bot={bot}
                  onToggleStatus={onToggleBotStatus}
                  onDelete={onDeleteBot}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
    }
    
