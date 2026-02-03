import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { cn } from '../lib/utils';

const PortfolioItem = ({ title, category, description, color, image }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Map of 400-level colors to radial gradients
    const gradients = {
        purple: "radial-gradient(circle at top left, #a78bfa, #7c3aed, #5b21b6)",
        amber: "radial-gradient(circle at top left, #fbbf24, #d97706, #92400e)",
        emerald: "radial-gradient(circle at top left, #34d399, #059669, #065f46)",
        rose: "radial-gradient(circle at top left, #fb7185, #e11d48, #9f1239)",
        blue: "radial-gradient(circle at top left, #60a5fa, #2563eb, #1e40af)"
    };

    return (
        <div
            className="flex-shrink-0 w-[450px] md:w-[650px] h-[350px] md:h-[500px] rounded-[2.5rem] flex flex-col justify-between transition-all duration-700 overflow-hidden relative group"
            style={{ background: gradients[color] || color }}
        >
            {/* Background Image/Hero */}
            {image && (
                <motion.div
                    className="absolute right-0 bottom-0 w-2/3 h-full pointer-events-none z-0"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain object-right-bottom transition-transform duration-700 group-hover:scale-110"
                    />
                </motion.div>
            )}

            {/* Upper section: Category */}
            <div className="p-12 relative z-10">
                <span className="text-white text-sm font-medium uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full">
                    {category}
                </span>
            </div>

            {/* Sliding White Panel (Half Card) */}
            <div className={cn(
                "absolute inset-x-0 bottom-0 bg-white transition-all duration-500 ease-out flex flex-col justify-center px-12 z-20",
                isOpen ? "h-1/2" : "h-0"
            )}>
                <div className={cn(
                    "transition-opacity duration-500",
                    isOpen ? "opacity-100 delay-200" : "opacity-0"
                )}>
                    <h3 className="text-black text-3xl font-bold mb-4">{title}</h3>
                    <p className="text-black/60 text-base leading-relaxed max-w-lg">
                        {description}
                    </p>
                </div>
            </div>

            {/* Arrow Icon Button - Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute bottom-8 right-8 z-30 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
                <div className={cn(
                    "w-14 h-14 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-black text-white" : "bg-white/20 text-white hover:bg-white/40 shadow-xl"
                )}>
                    <X size={24} className={cn("absolute transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")} />
                    <ArrowRight size={24} className={cn("transition-opacity duration-300", isOpen ? "opacity-0" : "opacity-100")} />
                </div>
            </button>

            {/* Initial heading (Visible when not open) */}
            <div className={cn(
                "absolute inset-x-0 bottom-0 p-12 transition-opacity duration-300 z-10",
                isOpen ? "opacity-0" : "opacity-100"
            )}>
                <h3 className="text-white text-5xl font-bold tracking-tighter drop-shadow-lg">{title}</h3>
            </div>
        </div>
    );
};

const HorizontalPortfolio = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adding spring physics for smoothness
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], ["0%", "-125%"]);

    return (
        <section ref={targetRef} className="relative h-[800vh] bg-white">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="flex flex-col w-full">
                    <div className="px-6 md:px-24 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Selected <br /> <span className="text-gray-300">Works.</span></h2>
                        </motion.div>
                    </div>
                    <motion.div style={{ x }} className="flex gap-16 items-center px-6 md:px-24">
                        <PortfolioItem
                            title="Codart Marketing"
                            category="Web Design"
                            description="A high-end marketing agency landing page with sophisticated animations and modern aesthetics."
                            color="purple"
                        />
                        <PortfolioItem
                            title="Natural & Fresh"
                            category="E-commerce"
                            description="Organic lifestyle store focusing on seamless user experience and minimalist product showcases."
                            color="amber"
                        />
                        <PortfolioItem
                            title="Coral Perfumes"
                            category="Branding"
                            description="Luxury fragrance branding project highlighting elegance and premium digital storytelling."
                            color="emerald"
                        />
                        <PortfolioItem
                            title="Memories Flowers"
                            category="Digital Strategy"
                            description="Strategic digital transformation for a premium florist, increasing online engagement by 150%."
                            color="rose"
                        />
                        <PortfolioItem
                            title="Glow Dubai"
                            category="Marketing"
                            description="Vibrant marketing campaign design for Dubai's leading wellness and beauty brands."
                            color="blue"
                        />

                        {/* Standalone CTA Button OUTSIDE a card */}
                        <div className="flex-shrink-0 pr-24 flex flex-col items-start">
                            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Crafting Digital <br /> Excellence.
                            </h3>
                            <a
                                href="#services"
                                className="group flex items-center gap-4 bg-black text-white px-10 py-6 rounded-full font-bold text-xl hover:bg-orange-600 transition-all duration-300"
                            >
                                View Services
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                                    <ArrowRight size={24} />
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HorizontalPortfolio;
