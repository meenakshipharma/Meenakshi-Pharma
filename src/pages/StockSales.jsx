import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiPieChart, FiBarChart2, FiMap, FiClock } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';

const StockSales = () => {
  return (
    <>
      <Helmet>
        <title>Stock & Sales | Meenakshi Pharma</title>
        <meta name="description" content="Dashboard view of our inventory capabilities and sales distribution network." />
      </Helmet>

      <PageBanner 
        title="Stock & Sales Dashboard" 
        subtitle="Transparent overview of our distribution capabilities and inventory strength."
      />

      <section className="section-padding bg-transparent min-h-screen">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* KPI Cards */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand">
              <p className="text-sm text-text-light mb-1 font-medium">Active SKUs</p>
              <h3 className="text-3xl font-bold text-text">12,450+</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-accent">
              <p className="text-sm text-text-light mb-1 font-medium">Daily Orders Processed</p>
              <h3 className="text-3xl font-bold text-text">850+</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-dark">
              <p className="text-sm text-text-light mb-1 font-medium">Fulfillment Rate</p>
              <h3 className="text-3xl font-bold text-text">98.5%</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
              <p className="text-sm text-text-light mb-1 font-medium">Delivery Fleet</p>
              <h3 className="text-3xl font-bold text-text">45+ Vans</h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Inventory Chart Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-card"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-serif font-bold">Category Distribution</h3>
                <FiBarChart2 className="text-gray-400 text-2xl" />
              </div>
              <div className="h-64 flex items-end gap-4 justify-between pt-10">
                {/* Mock Bars */}
                {[40, 70, 45, 90, 60, 30, 80].map((height, i) => (
                  <div key={i} className="w-full relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {height}%
                    </div>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`w-full rounded-t-md ${i % 2 === 0 ? 'bg-brand' : 'bg-brand-light'}`}
                    ></motion.div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-text-light">
                <span>Cardio</span>
                <span>Neuro</span>
                <span>Diabetic</span>
                <span>Antibiotics</span>
                <span>Derma</span>
                <span>Ortho</span>
                <span>OTC</span>
              </div>
            </motion.div>

            {/* Side Info */}
            <div className="flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="bg-brand text-white p-8 rounded-3xl shadow-card"
              >
                <FiMap className="text-4xl mb-4 opacity-80" />
                <h3 className="text-xl font-serif font-bold mb-2">Coverage Area</h3>
                <p className="text-brand-light mb-4 text-sm leading-relaxed">
                  Our distribution network spans across 15+ districts, ensuring deep market penetration and accessibility.
                </p>
                <div className="w-full bg-brand-dark rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-right mt-2 font-medium">85% Regional Coverage</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-card border border-gray-100"
              >
                <FiClock className="text-4xl mb-4 text-accent" />
                <h3 className="text-xl font-serif font-bold mb-2">Delivery Timelines</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-text-light">Local City</span>
                    <span className="font-semibold text-text">Same Day</span>
                  </li>
                  <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-text-light">Neighboring Districts</span>
                    <span className="font-semibold text-text">Next Day (24h)</span>
                  </li>
                  <li className="flex justify-between items-center text-sm pb-2">
                    <span className="text-text-light">Rural Areas</span>
                    <span className="font-semibold text-text">48 Hours</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
      <CTASection />
    </>
  );
};

export default StockSales;


