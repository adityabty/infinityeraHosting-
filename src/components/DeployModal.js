import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function DeployModal({ onClose, onDeploy }) {
  const [botName, setBotName] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [branch, setBranch] = useState('main');

  const handleSubmit = () => {
    if (!botName || !repoUrl) {
      alert('Please fill all required fields');
      return;
    }
    onDeploy({ botName, repoUrl, branch });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Deploy New Bot</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Bot Name" 
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg mb-4 text-white" 
          />
          <input 
            type="text" 
            placeholder="GitHub Repository URL" 
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg mb-4 text-white" 
          />
          <input 
            type="text" 
            placeholder="Branch (default: main)" 
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg mb-4 text-white"
          />
          <div className="bg-yellow-600/20 border border-yellow-600/40 rounded-lg p-4 mb-4">
            <p className="text-sm text-yellow-200">Deployment will cost 20 credits</p>
          </div>
          <button 
            onClick={handleSubmit} 
            className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Deploy Bot
          </button>
        </div>
      </div>
    </div>
  );
    }
