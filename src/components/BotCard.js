import React from 'react';
import { Play, Pause, Trash2 } from 'lucide-react';

export default function BotCard({ bot, onToggleStatus, onDelete }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1">{bot.name}</h3>
        <p className="text-sm text-gray-400 mb-2">{bot.repo}</p>
        <div className="flex items-center gap-4">
          <span 
            className={`px-3 py-1 rounded-full text-sm ${
              bot.status === 'running' ? 'bg-green-600' : 'bg-gray-600'
            }`}
          >
            {bot.status === 'running' ? '● Running' : '○ Stopped'}
          </span>
          <span className="text-sm text-gray-400">Credits Used: {bot.usage}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => onToggleStatus(bot.id)} 
          className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          {bot.status === 'running' ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button 
          onClick={() => onDelete(bot.id)} 
          className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
    }
