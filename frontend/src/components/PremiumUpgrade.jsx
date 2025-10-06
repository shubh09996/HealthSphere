import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PremiumUpgrade = () => {
  const premiumFeatures = [
    'Priority appointment tokens',
    'Advanced health analytics',
    'Priority blood donor alerts',
    'Unlimited AI chatbot access',
    'Multi-hospital management',
    'Verified donor badge',
  ];

  return (
    <section className="py-20 bg-premium-bg dark:bg-dark-premium-bg">
      <div className="container text-center">
        <div className="inline-flex items-center justify-center bg-premium-tag-bg text-premium-tag-text text-sm font-semibold px-4 py-1 rounded-full mb-6">
          Premium Features
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Upgrade to Premium
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 dark:text-gray-400">
          Unlock advanced features and priority access
        </p>

        <div className="bg-card p-8 rounded-xl shadow-lg max-w-4xl mx-auto border border-border dark:bg-dark-premium-card-bg dark:border-gray-700 dark:shadow-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-10 text-left">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 size={20} className="text-premium-button-free-trial-bg" />
                <span className="text-foreground text-base dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-premium-button-free-trial-bg text-premium-button-free-trial-text px-6 py-3 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity">
              Start 7-Day Free Trial
            </button>
            <button className="w-full sm:w-auto bg-premium-button-compare-bg text-premium-button-compare-text px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition-colors dark:bg-dark-premium-button-compare-bg dark:text-dark-premium-button-compare-text dark:hover:bg-gray-600">
              Compare Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumUpgrade;
