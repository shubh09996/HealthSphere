import React from 'react';
import { Download } from 'lucide-react';

const EPrescriptions = () => {
    return (
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-1">E-Prescriptions</h2>
            <p className="text-muted-foreground mb-4">Your digital prescriptions</p>

            <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-foreground">Dr. Sharma</h4>
                            <p className="text-sm text-muted-foreground">Oct 4, 2025</p>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">RX-5001</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-foreground mt-2 space-y-1">
                        <li>Paracetamol 500mg</li>
                        <li>Vitamin D</li>
                    </ul>
                    <div className="text-right mt-3">
                        <button className="text-sm font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text flex items-center gap-2 ml-auto">
                            <Download size={16} /> Download PDF
                        </button>
                    </div>
                </div>
                 <div className="bg-background p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-foreground">Dr. Gupta</h4>
                            <p className="text-sm text-muted-foreground">Sep 28, 2025</p>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">RX-5002</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-foreground mt-2 space-y-1">
                        <li>Azithromycin 250mg</li>
                    </ul>
                     <div className="text-right mt-3">
                        <button className="text-sm font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text flex items-center gap-2 ml-auto">
                            <Download size={16} /> Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EPrescriptions;