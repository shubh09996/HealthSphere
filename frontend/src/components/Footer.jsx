import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card dark:bg-background text-foreground py-12 border-t border-border mt-24">
      <div className="container flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-md">
            <span className="text-primary-foreground font-bold text-lg">H</span>
          </div>
          <span className="text-xl font-semibold text-foreground">HealthSphere</span>
        </div>
        <p className="text-muted-foreground dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HealthSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
