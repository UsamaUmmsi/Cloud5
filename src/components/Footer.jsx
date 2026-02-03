import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => (
    <footer className="footer-container px-2 mb-10">
        <div className="max-w-[1800px] mx-auto bg-black text-white pt-32 pb-16 px-8 md:px-24 rounded-[4.5rem] w-[98%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-black font-bold text-xs">C5</span>
                        </div>
                        <span className="text-xl font-bold tracking-tighter">CLOUD5</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">#1 Web Design Agency in Dubai. Crafting bespoke digital experiences that set you apart.</p>
                    <div className="flex gap-4">
                        <Instagram size={20} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                        <Twitter size={20} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                        <Linkedin size={20} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                        <Facebook size={20} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Services</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Custom Web Design</li>
                        <li className="hover:text-white cursor-pointer transition-colors">E-commerce Solutions</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Corporate Websites</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Mobile App Design</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Our Portfolio</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Pricing Plans</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Office</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Business Bay, Dubai, <br />United Arab Emirates. <br /><br />info@cloud6.ae <br />+971 4 XXX XXXX</p>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>&copy; 2026 CLOUD5 DUBAI. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8"><span>Privacy Policy</span><span>Terms of Service</span></div>
            </div>
        </div>
    </footer>
);

export default Footer;
