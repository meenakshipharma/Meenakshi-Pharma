import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiTruck,
  FiShield,
  FiUsers,
  FiBox,
  FiTrendingUp,
} from "react-icons/fi";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import heroImg from "../assets/hero.png";

import { useMotionValue, useTransform, animate } from "framer-motion";

const Counter = ({ target, suffix = "" }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState("0");

  React.useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toLocaleString());
      },
    });
    return controls.stop;
  }, [count, target]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
};

const Home = () => {
  const stats = [
    { target: 15, suffix: "+", label: "Years Experience" },
    { target: 5000, suffix: "+", label: "Customers Served" },
    { target: 10, suffix: "M+", label: "Medicines Distributed" },
    { target: 1200, suffix: "+", label: "Partner Pharmacies" },
  ];

  const services = [
    {
      icon: <FiBox className="text-4xl text-brand" />,
      title: "Pharmaceutical Distribution",
      desc: "Reliable and timely distribution of high-quality medicines.",
    },
    {
      icon: <FiTruck className="text-4xl text-brand" />,
      title: "Cold Chain Logistics",
      desc: "Temperature-controlled supply chain for sensitive products.",
    },
    {
      icon: <FiShield className="text-4xl text-brand" />,
      title: "Quality Assurance",
      desc: "Strict compliance with pharmaceutical safety standards.",
    },
    {
      icon: <FiActivity className="text-4xl text-brand" />,
      title: "Super-Specialty Care",
      desc: "Providing life-saving critical care medications.",
    },
    {
      icon: <FiUsers className="text-4xl text-brand" />,
      title: "Retail Pharmacy Support",
      desc: "Comprehensive support for our retail partners.",
    },
    {
      icon: <FiTrendingUp className="text-4xl text-brand" />,
      title: "Inventory Management",
      desc: "Advanced tracking and stock management solutions.",
    },
  ];

  const features = [
    {
      title: "Extensive Network",
      desc: "Wide reach ensuring timely deliveries.",
    },
    {
      title: "Competitive Pricing",
      desc: "Best value for our healthcare partners.",
    },
    { title: "24/7 Support", desc: "Dedicated customer service team." },
  ];

  return (
    <>
      <Helmet>
        <title>Meenakshi Pharma | Premium Healthcare Distribution</title>
        <meta
          name="description"
          content="Delivering excellence in pharmaceutical distribution with a commitment to quality, reliability, and healthcare advancement."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-transparent">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent opacity-5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-light text-brand font-medium text-xl mb-6">
              Meenakshi Pharma
            </span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-text leading-tight mb-6">
              Trichy's
              <span className="text-brand"> Leading Pharma </span> Distributor
            </h1>
            <p className="text-lg text-text-light mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Your trusted partner in pharmaceutical distribution. We ensure
              safe, reliable, and timely access to quality healthcare products
              across the region.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button to="/services">Explore Services</Button>
              <Button to="/partner" variant="secondary">
                Partner With Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative w-full max-w-md mx-auto lg:max-w-lg lg:ml-auto mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border-8 border-white/50 backdrop-blur-sm">
              <img
                src={heroImg}
                alt="Meenakshi Pharma Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand mix-blend-overlay opacity-20"></div>
            </div>
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl glass-card hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center text-accent">
                  <FiShield className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-text-light font-medium">
                    Certified
                  </p>
                  <p className="font-serif font-bold text-lg text-text">
                    Quality Assured
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="py-12 bg-transparent relative z-20 -mt-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand mb-2">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </h3>
                <p className="text-text-light font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
                {/* <img
                  src={heroImg}
                  alt="Meenakshi Pharma Facility"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="A Legacy of Trust in Healthcare"
                subtitle="About Meenakshi Pharma"
                align="left"
              />
              <p className="text-text-light mb-6 leading-relaxed">
                Since our inception, Meenakshi Pharma has been dedicated to
                bridging the gap between pharmaceutical manufacturers and
                healthcare providers. We pride ourselves on a robust
                distribution network that ensures vital medicines reach those
                who need them most.
              </p>
              <p className="text-text-light mb-10 leading-relaxed">
                Our state-of-the-art warehousing facilities, stringent quality
                control measures, and dedicated team make us the preferred
                partner for leading pharmaceutical brands.
              </p>
              <Button to="/about">Read Our Story</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <SectionTitle
            title="Comprehensive Healthcare Solutions"
            subtitle="Our Services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-text">
                  {service.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-transparent">
        <div className="container-custom text-center">
          <SectionTitle title="Why Partner With Us" subtitle="Our Strengths" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand opacity-5 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-xl font-serif font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;
