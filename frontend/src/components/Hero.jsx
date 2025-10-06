import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-24 md:py-32">
      <div className="inline-flex items-center justify-center bg-muted border border-border text-xs px-3 py-1 rounded-full mb-5">
        <span className="text-primary mr-2 text-sm">✲</span>
        <span className="text-foreground/80 font-medium">Integrated Healthcare Platform</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] text-transparent bg-clip-text">
        Welcome to HealthSphere
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-normal">
        A comprehensive healthcare ecosystem connecting patients, doctors, pharmacies, and blood donors for seamless healthcare delivery
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* GRADIENT ADDED TO BUTTON */}
        <button className="w-full sm:w-auto bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] text-primary-foreground px-5 py-2.5 rounded-md flex items-center justify-center space-x-2 font-medium hover:opacity-90 transition-transform hover:scale-105">
          <span>Get Started</span>
          <span className="font-bold text-lg">→</span>
        </button>

        {/* GRADIENT BORDER BUTTON */}
        <div className="p-0.5 rounded-md bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2]">
           <button className="w-full sm:w-auto bg-card text-foreground px-5 py-2 rounded-md font-medium hover:bg-muted transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;