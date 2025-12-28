import React, { useState } from 'react';
import { Server, Music, Zap, Shield, CreditCard, Github, CheckCircle, Menu, X } from 'lucide-react';

export default function InfinityEraHosting() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [credits, setCredits] = useState(100);
  const [bots, setBots] = useState([]);
  const [showDeployForm, setShowDeployForm] = useState(false);
  const [deployForm, setDeployForm] = useState({
    botName: '',
    repoUrl: '',
    envVars: ''
  });

  const pricingPlans = [
    {
      name: 'Starter',
      credits: 100,
      price: '₹99',
      features: ['1 Bot Instance', '512MB RAM', '5GB Storage', 'Basic Support']
    },
    {
      name: 'Pro',
      credits: 500,
      price: '₹399',
      features: ['5 Bot Instances', '2GB RAM', '20GB Storage', 'Priority Support'],
      popular: true
    },
    {
      name: 'Enterprise',
      credits: 1500,
      price: '₹999',
      features: ['Unlimited Bots', '8GB RAM', '100GB Storage', '24/7 Support']
    }
  ];

  const handleDeploy = () => {
    if (!deployForm.botName || !deployForm.repoUrl) {
      alert('Please fill in bot name and repository URL');
      return;
    }

    const newBot = {
      id: Date.now(),
      name: deployForm.botName,
      repo: deployForm.repoUrl,
      status: 'deploying',
      creditsPerHour: 2
    };

    setBots([...bots, newBot]);
    setShowDeployForm(false);
    setDeployForm({ botName: '', repoUrl: '', envVars: '' });

    setTimeout(() => {
      setBots(prev =>
        prev.map(bot =>
          bot.id === newBot.id ? { ...bot, status: 'running' } : bot
        )
      );
    }, 3000);
  };

  const stopBot = (id) => {
    setBots(prev =>
      prev.map(bot =>
        bot.id === id ? { ...bot, status: 'stopped' } : bot
      )
    );
  };

  const deleteBot = (id) => {
    setBots(prev => prev.filter(bot => bot.id !== id));
  };

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">InfinityEra Hosting</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <button onClick={() => setActiveTab('home')} className={`hover:text-yellow-400 transition ${activeTab === 'home' ? 'text-yellow-400' : ''}`}>Home</button>
            <button onClick={() => setActiveTab('dashboard')} className={`hover:text-yellow-400 transition ${activeTab === 'dashboard' ? 'text-yellow-400' : ''}`}>Dashboard</button>
            <button onClick={() => setActiveTab('pricing')} className={`hover:text-yellow-400 transition ${activeTab === 'pricing' ? 'text-yellow-400' : ''}`}>Pricing</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-purple-800 px-4 py-2 rounded-lg flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span className="font-semibold">{credits} Credits</span>
            </div>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:bg-purple-800 px-4 rounded">Home</button>
            <button onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:bg-purple-800 px-4 rounded">Dashboard</button>
            <button onClick={() => { setActiveTab('pricing'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:bg-purple-800 px-4 rounded">Pricing</button>
            <div className="bg-purple-800 px-4 py-2 rounded-lg flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span className="font-semibold">{credits} Credits</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Host Your Telegram Music Bot
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Deploy, manage, and scale your music bots with InfinityEra Hosting
          </p>
          <button
            onClick={() => setActiveTab('dashboard')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Get Started Free
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">High Performance</h3>
            <p className="text-gray-600">64GB VPS with optimized resources for your music bots</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">GitHub Integration</h3>
            <p className="text-gray-600">Deploy directly from your GitHub repository</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">24/7 uptime with automatic backups</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h2>
          <button
            onClick={() => setShowDeployForm(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center space-x-2"
          >
            <Zap className="w-5 h-5" />
            <span>Deploy New Bot</span>
          </button>
        </div>

        {showDeployForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">Deploy Telegram Music Bot</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bot Name</label>
                <input
                  type="text"
                  value={deployForm.botName}
                  onChange={(e) => setDeployForm({ ...deployForm, botName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="My Music Bot"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Repository URL</label>
                <input
                  type="url"
                  value={deployForm.repoUrl}
                  onChange={(e) => setDeployForm({ ...deployForm, repoUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://github.com/username/repo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Environment Variables (Optional)</label>
                <textarea
                  value={deployForm.envVars}
                  onChange={(e) => setDeployForm({ ...deployForm, envVars: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="API_KEY=your_key&#10;BOT_TOKEN=your_token"
                  rows="4"
                />
              </div>

              <div className="flex space-x-4">
                <button onClick={handleDeploy} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition">
                  Deploy Bot
                </button>
                <button onClick={() => setShowDeployForm(false)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {bots.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No bots deployed yet</p>
              <p className="text-gray-500 mt-2">Deploy your first Telegram music bot to get started</p>
            </div>
          ) : (
            bots.map(bot => (
              <div key={bot.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      bot.status === 'running' ? 'bg-green-100' :
                      bot.status === 'deploying' ? 'bg-yellow-100' : 'bg-red-100'
                    }`}>
                      <Music className={`w-6 h-6 ${
                        bot.status === 'running' ? 'text-green-600' :
                        bot.status === 'deploying' ? 'text-yellow-600' : 'text-red-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{bot.name}</h3>
                      <p className="text-sm text-gray-600">{bot.repo}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                        bot.status === 'running' ? 'bg-green-100 text-green-800' :
                        bot.status === 'deploying' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {bot.status === 'running' ? 'Running' : bot.status === 'deploying' ? 'Deploying...' : 'Stopped'}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {bot.status === 'running' && (
                      <button
                        onClick={() => stopBot(bot.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                      >
                        Stop
                      </button>
                    )}
                    <button
                      onClick={() => deleteBot(bot.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>Credits Usage: {bot.creditsPerHour} credits/hour</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-700">Credit-based pricing for maximum flexibility</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.credits} Credits</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setCredits(credits + plan.credits);
                  alert(`Successfully purchased ${plan.credits} credits!`);
                }}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Buy Credits
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4">How Credits Work</h3>
          <div className="space-y-2 text-gray-700">
            <p>• Credits are consumed based on usage (typically 1-5 credits per hour per bot)</p>
            <p>• Credits never expire</p>
            <p>• You can top up anytime with any plan</p>
            <p>• Automatic scaling based on bot requirements</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {activeTab === 'home' && <HomePage />}
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'pricing' && <PricingPage />}
    </div>
  );
        }
