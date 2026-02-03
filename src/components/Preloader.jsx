import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: -1000,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />

            <div className="relative flex flex-col items-center">
                {/* Animated Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute w-40 h-40 border-t-2 border-r-2 border-orange-600 rounded-full opacity-30"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 border-b-2 border-l-2 border-white/20 rounded-full opacity-20"
                />

                {/* Brand Logo Zoom Animation */}
                <motion.div
                    animate={{
                        scale: [0.9, 1.15, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-28 h-28 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(234,88,12,0.3)] relative z-10"
                >
                    <span className="text-black font-black text-4xl tracking-tighter">C5</span>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex flex-col items-center gap-4"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-white text-2xl font-black tracking-[0.4em] mb-1">CLOUD5</span>
                        <span className="text-orange-500 text-[10px] font-bold tracking-[0.6em] uppercase">Digital Excellence</span>
                    </div>
                    <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-4 relative">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute inset-0 bg-orange-600"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
