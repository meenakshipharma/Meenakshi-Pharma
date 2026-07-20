import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiMonitor, FiCheckCircle, FiClock, FiSmartphone } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const WebOrder = () => {
  const steps = [
    { icon: <FiMonitor />, title: '1. Register / Login', desc: 'Access our B2B portal with your approved credentials.' },
    { icon: <FiMonitor />, title: '2. Browse Catalog', desc: 'Search for products by name, brand, or category.' },
    { icon: <FiMonitor />, title: '3. Add to Cart', desc: 'Select quantities and add items to your digital cart.' },
    { icon: <FiCheckCircle />, title: '4. Checkout & Pay', desc: 'Review your order and proceed to secure checkout.' },
  ];

  const benefits = [
    { icon: <FiClock />, title: '24/7 Ordering', desc: 'Place orders anytime, anywhere, at your convenience.' },
    { icon: <FiCheckCircle />, title: 'Live Inventory', desc: 'See real-time stock availability before ordering.' },
    { icon: <FiSmartphone />, title: 'Mobile Friendly', desc: 'Order seamlessly from your smartphone or tablet.' },
  ];

  return (
    <>
      <Helmet>
        <title>Web Order | Meenakshi Pharma</title>
        <meta name="description" content="Learn how to place orders online through our B2B portal." />
      </Helmet>

      <PageBanner 
        title="Web Order System" 
        subtitle="Streamlined online ordering for our registered partners."
      />

      {/* How It Works */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <SectionTitle title="How It Works" subtitle="Simple Ordering Process" />
          
          <div className="flex flex-col md:flex-row justify-between items-center relative mt-16">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-1/2"></div>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-64 text-center mb-8 md:mb-0 border border-gray-50"
              >
                <div className="w-16 h-16 mx-auto bg-brand text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md">
                  {step.icon}
                </div>
                <h4 className="font-serif font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-text-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-transparent">
        <div className="container-custom text-center">
          <SectionTitle title="Why Order Online?" subtitle="Benefits" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10"
              >
                <div className="text-4xl text-accent mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-4">{benefit.title}</h3>
                <p className="text-text-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-light text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Ready to start ordering?</h2>
          <p className="text-lg text-text-light mb-10 max-w-2xl mx-auto">
            If you are already a registered partner, click below to access the B2B portal. If not, please apply to partner with us first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button>Access B2B Portal</Button>
            <Button to="/partner" variant="secondary">Become a Partner</Button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default WebOrder;


