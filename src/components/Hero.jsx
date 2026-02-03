import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/vecteezy_a-laptop-computer-with-colorful-lights-on-it_52071088 (1) (1).mp4';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Autoplay waiting..."));
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                >
                    {/* Compressed video source */}
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[1px] z-10" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold mb-8"
                >
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    NO TEMPLATES. PURE BESPOKE.
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-8 text-white"
                >
                    Transforming Vision into <br className="hidden md:block" />
                    <span className="text-gray-300 italic">Digital Reality.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg text-gray-200 mb-10 leading-relaxed"
                >
                    We are a Dubai-based web design company passionate about developing outstanding results.
                    Creativity, technology, and functionality combined to elevate your brand.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:bg-orange-600 hover:text-white transition-all">
                        View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                        Our Services
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
