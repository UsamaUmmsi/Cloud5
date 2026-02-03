import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code2, Search, Zap, TrendingUp, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

const ServiceCard = ({ icon: Icon, title, description, hoverColor }) => (
    <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className={cn(
            "bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 group cursor-pointer",
            hoverColor
        )}
    >
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-black group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">{description}</p>
    </motion.div>
);

const Services = () => (
    <section id="services" className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Expertise</h2>
                <p className="text-gray-500">Tailored solutions for modern digital identities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard icon={Layout} title="Web Design" description="Bespoke, stunning designs that resonate with your brand's glamour and values. No templates, ever." hoverColor="hover:bg-purple-600 shadow-purple-200" />
                <ServiceCard icon={Code2} title="Web Development" description="High-performance, scalable websites built with the latest technologies for seamless user experience." hoverColor="hover:bg-orange-600 shadow-orange-200" />
                <ServiceCard icon={Search} title="SEO Optimization" description="Strategic visibility to ensure you rank where it matters. Fast loading and search-engine friendly." hoverColor="hover:bg-emerald-600 shadow-emerald-200" />
                <ServiceCard icon={Zap} title="E-commerce" description="Complete online shopping solutions designed to convert visitors into loyal customers." hoverColor="hover:bg-blue-600 shadow-blue-200" />
                <ServiceCard icon={TrendingUp} title="Digital Branding" description="Cohesive brand identities that leave a lasting impression across all digital touchpoints." hoverColor="hover:bg-rose-600 shadow-rose-200" />
                <ServiceCard icon={Cpu} title="Tech Consultation" description="Expert advice on the right technology stack to future-proof your business." hoverColor="hover:bg-amber-500 shadow-amber-200" />
            </div>
        </div>
    </section>
);

export default Services;
