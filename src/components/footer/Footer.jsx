import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Footer = () => {
    return (
        <div className='bg-[#E8E8EA]'>
            <div className="w-11/12 mx-auto py-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 50 }} // Initial state (hidden and moved down)
                    animate={{ opacity: 1, y: 0 }} // Final state (visible and in place)
                    transition={{ duration: 0.8 }} // Animation duration
                >
                    {/* About Us */}
                    <motion.div className="space-y-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="font-bold text-xl">About Us</h1>
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div>
                            <h1>Email: info@meta.net</h1>
                            <h1>Phone: 880 123 456 789</h1>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="space-y-4 lg:ml-14" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="font-bold text-xl">Quick Links</h1>
                        <nav>
                            <ul className="space-y-2">
                                <li><Link to={""}>Home</Link></li>
                                <li><Link to={""}>About</Link></li>
                                <li><Link to={""}>Blog</Link></li>
                                <li><Link to={""}>Author</Link></li>
                                <li><Link to={""}>Contact</Link></li>
                            </ul>
                        </nav>
                    </motion.div>

                    {/* Categories */}
                    <motion.div className="space-y-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="font-bold text-xl">Categories</h1>
                        <nav>
                            <ul className="space-y-2">
                                <li><Link to={""}>Lifestyle</Link></li>
                                <li><Link to={""}>Technology</Link></li>
                                <li><Link to={""}>Travel</Link></li>
                                <li><Link to={""}>Business</Link></li>
                                <li><Link to={""}>Economy</Link></li>
                            </ul>
                        </nav>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div className="space-y-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="font-bold text-xl">Newsletter</h1>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 border rounded-md"
                        />
                        <button className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md">Subscribe</button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Footer;
