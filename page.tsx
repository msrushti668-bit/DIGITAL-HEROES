'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle, Heart } from 'lucide-react';

export default function Dashboard() {
  // Placeholder for scores fetched from Supabase
  const [scores, setScores] = useState([38, 42, 35, 40]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="flex justify-between items-end border-b border-neutral-200 pb-6">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-light tracking-tight"
          >
            Welcome back.
          </motion.h1>
          <div className="text-sm font-medium px-4 py-1.5 bg-neutral-900 text-white rounded-full shadow-sm">
            Active Subscriber
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Recent Scores Data Block */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-2 bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neutral-400" />
              Recent Entries
            </h2>
            <div className="flex gap-4">
              {scores.map((score, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="w-16 h-24 flex items-center justify-center bg-neutral-50 border border-neutral-200 rounded-xl text-2xl font-light shadow-inner"
                >
                  {score}
                </motion.div>
              ))}
              {scores.length < 5 && (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-24 flex items-center justify-center border-2 border-dashed border-neutral-300 rounded-xl text-neutral-400 hover:text-black hover:border-black transition-colors"
                >
                  +
                </motion.button>
              )}
            </div>
            <p className="text-sm text-neutral-500 mt-6">
              You can enter up to 5 scores. The oldest entry will automatically cycle out.
            </p>
          </motion.section>

          {/* Charity Impact Overview */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-neutral-400" />
                Impact
              </h2>
              <div className="mb-4">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Supported Charity</p>
                <p className="text-lg font-medium text-neutral-800">Save The Oceans</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Donation Allocation</p>
              <p className="text-4xl font-light text-neutral-900">10%</p>
            </div>
          </motion.section>

          {/* Winner Verification Call To Action */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-3 bg-neutral-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg"
          >
            <div className="max-w-xl">
              <h2 className="text-2xl font-medium mb-2">Winner Verification</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Did your numbers come up? Upload a clean screenshot of your verified score sheet to claim your prize. Verification typically takes 12-24 hours.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-neutral-900 px-6 py-3 rounded-full font-medium flex items-center gap-3 shrink-0"
            >
              <UploadCloud className="w-5 h-5" />
              Upload Proof
            </motion.button>
          </motion.section>
        </div>
      </div>
    </div>
  );
}