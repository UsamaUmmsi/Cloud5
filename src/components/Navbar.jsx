import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
            isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3 text-black" : "bg-transparent text-white"
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",
                        isScrolled ? "bg-black" : "bg-white"
                    )}>
                        <span className={isScrolled ? "text-white font-bold text-xs" : "text-black font-bold text-xs"}>C5</span>
                    </div>
                    <span className={cn("text-xl font-bold tracking-tighter", isScrolled ? "text-black" : "text-white")}>CLOUD5</span>
                </div>

                <div className="hidden md:flex items-center gap-8 font-medium text-sm">
                    {['Portfolio', 'Services', 'Process', 'About'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className={cn(
                            "transition-colors",
                            isScrolled ? "text-black hover:text-orange-600" : "text-white hover:text-orange-400"
                        )}>
                            {item}
                        </a>
                    ))}
                    <button className={cn(
                        "px-5 py-2 rounded-full text-xs font-bold transition-all",
                        isScrolled ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"
                    )}>
                        Get Started
                    </button>
                </div>

                <button className={cn("md:hidden", isScrolled ? "text-black" : "text-white")} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white border-b p-6 flex flex-col gap-4 md:hidden text-black shadow-xl"
                    >
                        {['Portfolio', 'Services', 'Process', 'About'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium border-b border-gray-100 pb-2">
                                {item}
                            </a>
                        ))}
                        <button className="bg-black text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-black/10">Get A Quote</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
