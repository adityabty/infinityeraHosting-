import React from 'react';
import { Zap, Shield, Github } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      color: 'text-yellow-400',
      title: 'Lightning Fast',
      description: 'Deploy your bots in seconds with our automated deployment system.'
    },
    {
      icon: Shield,
      color: 'text-green-400',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: Github,
      color: 'text-purple-400',
      title: 'GitHub Integration',
      description: 'Deploy directly from your GitHub repository with ease.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <Icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
    }
