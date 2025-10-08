import React from 'react';
import { ShieldCheck } from 'lucide-react';

const InsuranceTab = ({ insurance }) => (
     <div className="bg-card p-6 rounded-xl border border-border">
         <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="text-primary"/> Linked Insurance Policy</h3>
         <div className="space-y-3 bg-muted p-4 rounded-lg">
            <div>
                <p className="text-sm text-muted-foreground">Provider</p>
                <p className="font-semibold text-foreground">{insurance.provider}</p>
            </div>
             <div>
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="font-semibold text-foreground">{insurance.policyNumber}</p>
            </div>
             <div>
                <p className="text-sm text-muted-foreground">Valid Till</p>
                <p className="font-semibold text-foreground">{new Date(insurance.validTill).toDateString()}</p>
            </div>
             <div>
                <p className="text-sm text-muted-foreground">Coverage Details</p>
                <p className="font-semibold text-foreground">{insurance.coverage}</p>
            </div>
         </div>
     </div>
);

export default InsuranceTab;