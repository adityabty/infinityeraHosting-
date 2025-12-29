import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import DeployModal from './components/DeployModal';
import RechargeModal from './components/RechargeModal';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDeploy, setShowDeploy] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [user, setUser] = useState({
    name: '',
    email: '',
    credits: 0,
    bots: []
  });

  const handleLogin = (email, password) => {
    setUser({
      name: 'Demo User',
      email: email,
      credits: 250,
      bots: [
        { 
          id: 1, 
          name: 'MusicBot1', 
          status: 'running', 
          repo: 'github.com/user/musicbot', 
          usage: 45 
        },
        { 
          id: 2, 
          name: 'PlaylistBot', 
          status: 'stopped', 
          repo: 'github.com/user/playlist', 
          usage: 0 
        }
      ]
    });
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignup = (name, email, password) => {
    setUser({
      name: name,
      email: email,
      credits: 50,
      bots: []
    });
    setIsLoggedIn(true);
    setShowSignup(false);
  };

  const handleDeploy = (deployData) => {
    const newBot = {
      id: Date.now(),
      name: deployData.botName,
      status: 'running',
      repo: deployData.repoUrl,
      usage: 0
    };
    
    setUser(prev => ({
      ...prev,
      bots: [...prev.bots, newBot],
      credits: prev.credits - 20
    }));
    setShowDeploy(false);
  };

  const handleRecharge = (amount) => {
    setUser(prev => ({
      ...prev,
      credits: prev.credits + amount
    }));
    setShowRecharge(false);
  };

  const toggleBotStatus = (botId) => {
    setUser(prev => ({
      ...prev,
      bots: prev.bots.map(bot => 
        bot.id === botId 
          ? { ...bot, status: bot.status === 'running' ? 'stopped' : 'running' }
          : bot
      )
    }));
  };

  const deleteBot = (botId) => {
    if (window.confirm('Are you sure you want to delete this bot?')) {
      setUser(prev => ({
        ...prev,
        bots: prev.bots.filter(bot => bot.id !== botId)
      }));
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({
      name: '',
      email: '',
      credits: 0,
      bots: []
    });
  };

  return (
    <>
      {!isLoggedIn ? (
        <LandingPage 
          onLogin={() => setShowLogin(true)}
          onSignup={() => setShowSignup(true)}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      ) : (
        <Dashboard 
          user={user}
          onLogout={handleLogout}
          onShowDeploy={() => setShowDeploy(true)}
          onShowRecharge={() => setShowRecharge(true)}
          onToggleBotStatus={toggleBotStatus}
          onDeleteBot={deleteBot}
        />
      )}

      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignupModal 
          onClose={() => setShowSignup(false)}
          onSignup={handleSignup}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {showDeploy && (
        <DeployModal 
          onClose={() => setShowDeploy(false)}
          onDeploy={handleDeploy}
        />
      )}

      {showRecharge && (
        <RechargeModal 
          onClose={() => setShowRecharge(false)}
          onRecharge={handleRecharge}
        />
      )}
    </>
  );
            }
