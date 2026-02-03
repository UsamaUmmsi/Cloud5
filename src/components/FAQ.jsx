import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "rounded-[2rem] transition-all duration-500 mb-4 overflow-hidden border",
                isOpen ? "bg-white border-orange-500/30 shadow-2xl shadow-orange-500/10" : "bg-gray-50/50 border-gray-100 hover:border-gray-200"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-8 flex justify-between items-center text-left group"
            >
                <div className="flex gap-6 items-center">
                    <span className={cn(
                        "text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                        isOpen ? "bg-orange-600 text-white" : "bg-white text-gray-400 group-hover:text-orange-600 shadow-sm"
                    )}>
                        {index + 1}
                    </span>
                    <h3 className={cn("text-xl font-bold transition-colors", isOpen ? "text-black" : "text-gray-700 group-hover:text-black")}>
                        {question}
                    </h3>
                </div>
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                    isOpen ? "bg-black text-white rotate-45" : "bg-gray-100 text-gray-400 group-hover:bg-orange-100 group-hover:text-orange-600"
                )}>
                    <Plus size={20} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    >
                        <div className="px-24 pb-8">
                            <div className="h-px bg-gray-100 w-full mb-6" />
                            <p className="text-gray-500 text-lg leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => (
    <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5">
                    <div className="sticky top-32">
                        <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                            <HelpCircle size={14} />
                            GOT QUESTIONS?
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">Frequently <br /><span className="text-orange-600">Asked.</span></h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-md">
                            Finding the right digital partner is a big decision. Here are answers to the most common queries we receive from our clients.
                        </p>
                        <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
                            <h4 className="font-bold text-xl mb-4">Still need help?</h4>
                            <p className="text-gray-600 text-sm mb-6">Our team is ready to discuss your unique project requirements.</p>
                            <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                Contact our support <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <FAQItem
                        index={0}
                        question="Why is bespoke design better than templates?"
                        answer="Bespoke design is tailored specifically to your brand's unique identity and conversion goals. Templates often come with heavy code, security risks, and a 'seen it before' look that fails to impress high-end clients."
                    />
                    <FAQItem
                        index={1}
                        question="What is your typical project timeline?"
                        answer="We usually deliver a complete premium website within 6-10 weeks. This includes 2 weeks for planning, 3 weeks for design, and 3-5 weeks for development and launching."
                    />
                    <FAQItem
                        index={2}
                        question="Do you work with international clients?"
                        answer="Yes! While we are based in Dubai, we work with brands globally. We use collaborative tools like Slack, Zoom, and Figma to ensure seamless communication regardless of time zones."
                    />
                    <FAQItem
                        index={3}
                        question="Will my website be mobile-friendly?"
                        answer="Absolutely. Every project we launch is fully responsive, meaning it will look and perform flawlessly on smartphones, tablets, and desktops alike."
                    />
                    <FAQItem
                        index={4}
                        question="How do you handle SEO and rankings?"
                        answer="We integrate technical SEO into the core of your site—fast load times, clean code, and proper metadata—giving you the best possible foundation to rank on Google."
                    />
                </div>
            </div>
        </div>
    </section>
);

export default FAQ;
