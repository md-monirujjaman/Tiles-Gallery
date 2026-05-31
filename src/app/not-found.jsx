'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-6">
            
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-md"
            >
                {/* 404 Text */}
                <motion.h1 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl font-extrabold text-gray-800"
                >
                    404
                </motion.h1>

                {/* Message */}
                <p className="mt-4 text-gray-600 text-lg">
                    Oops! The page you’re looking for doesn’t exist.
                </p>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-24 h-24 mx-auto mt-8 rounded-full bg-[#5a00ff]/20"
                />

                {/* Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8"
                >
                    <Link href="/">
                        <button className="px-6 py-3 rounded-xl text-white font-semibold shadow-lg bg-[#5a00ff] hover:opacity-90 transition">
                            Go Home
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;