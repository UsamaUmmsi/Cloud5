import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';

const About = () => (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                        alt="Our Team"
                        className="w-full h-[600px] object-cover"
                    />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-orange-600 text-white p-12 rounded-[2.5rem] shadow-xl z-20 hidden md:block">
                    <div className="text-5xl font-bold mb-2">10+</div>
                    <div className="text-sm font-medium uppercase tracking-widest opacity-80">Years Experience</div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100 rounded-full blur-[120px] -z-10 opacity-50" />
            </div>

            <div>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                    <Users size={14} />
                    WHO WE ARE
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">We build brands, <br /><span className="text-orange-600">not just websites.</span></h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                    At CLOUD5, we don't believe in templates or shortcuts. We believe in the power of original thought and meticulous craft. Every project we undertake is a journey to find the unique pulse of a brand and amplify it through digital excellence.
                </p>
                <div className="space-y-6">
                    {[
                        { title: "Bespoke Research", desc: "Understanding your market before drawing a single pixel." },
                        { title: "Cutting-edge Tech", desc: "Using the fastest, most reliable frameworks available today." },
                        { title: "Dubai Based", desc: "Local expertise with a global mindset for premium results." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-1">
                                <CheckCircle2 size={14} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default About;
