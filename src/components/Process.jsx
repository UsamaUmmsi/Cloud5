import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProcessStep = ({ step, title, description, isLast }) => (
    <div className="flex gap-8 relative group">
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg z-10 shrink-0">
                {step}
            </div>
            {!isLast && <div className="w-0.5 h-full bg-gray-100 group-hover:bg-orange-600 transition-colors" />}
        </div>
        <div className="pb-16">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-500 max-w-xl">{description}</p>
        </div>
    </div>
);

const Process = () => (
    <section id="process" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <div className="inline-block bg-black text-white px-4 py-1 rounded-md text-xs font-bold mb-6">WORKFLOW</div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">How We Bring <br />Ideas To Life.</h2>
                <p className="text-gray-500 text-lg mb-8">Our process is transparent, collaborative, and focused on delivering excellence at every milestone.</p>
                <div className="flex items-center gap-4 text-sm font-medium">
                    <CheckCircle2 className="text-green-500" /> 100% Satisfaction Guarantee
                </div>
            </div>
            <div className="pt-8">
                <ProcessStep step="01" title="Enquiry & Discovery" description="We dive deep into your requirements and goals to understand the project landscape." />
                <ProcessStep step="02" title="Meet Up & Discussion" description="Collaborative sessions to align on vision, creative direction, and technical possibilities." />
                <ProcessStep step="03" title="Alignment & Agreement" description="Clear milestones, transparent pricing, and a roadmap for project success." />
                <ProcessStep step="04" title="Development & Deployment" description="Our expert team builds and launches your digital masterpiece with precision." isLast />
            </div>
        </div>
    </section>
);

export default Process;
