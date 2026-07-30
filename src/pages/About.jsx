import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { about } from "../data/content";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Meenakshi Pharma</title>
        <meta
          name="description"
          content="Learn about our vision, mission, and state-of-the-art infrastructure at Meenakshi Pharma."
        />
      </Helmet>

      <PageBanner
        title="About Meenakshi Pharma"
        subtitle="A Legacy of Trust and Excellence in Pharmaceutical Distribution"
      />
      {/* About Story */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={about.introduction.imageUrl}
                  alt="Meenakshi Pharma"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-8 py-5">
                <h3 className="text-4xl font-bold text-brand">28+</h3>
                <p className="text-sm text-text-light">
                  Years of Trusted Service
                </p>
              </div> */}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand font-semibold uppercase tracking-widest">
                {about.introduction.subtitle}
              </span>

              <h2 className="text-3xl lg:text-4xl font-serif mt-3 mb-8">
                {about.introduction.title}
              </h2>

              <p
                className="text-text-light leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: about.introduction.desc1,
                }}
              />

              <p
                className="text-text-light leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: about.introduction.desc2,
                }}
              />

              <p
                className="text-text-light leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: about.introduction.desc3,
                }}
              />
              <p
                className="text-text-light leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: about.introduction.desc4,
                }}
              />
              <p
                className="text-text-light leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: about.introduction.desc5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              className="flex-1 bg-white p-10 rounded-3xl shadow-card border-l-8 border-brand hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand opacity-5 rounded-full -mr-6 -mt-6"></div>
              <div className="w-14 h-14 bg-brand-light text-brand rounded-2xl flex items-center justify-center text-2xl mb-6">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-text mb-4">Our Vision</h2>
              <p className="text-text-light leading-relaxed text-lg font-light">
                To be the most reliable and preferred pharmaceutical
                distribution partner, ensuring every individual has access to
                quality healthcare products when they need them the most. We
                strive to build a healthier tomorrow through an efficient and
                transparent supply chain.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 bg-white p-10 rounded-3xl shadow-card border-l-8 border-accent hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent opacity-5 rounded-full -mr-6 -mt-6"></div>
              <div className="w-14 h-14 bg-accent-light text-accent rounded-2xl flex items-center justify-center text-2xl mb-6">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-text mb-4">
                Our Mission
              </h2>
              <p className="text-text-light leading-relaxed text-lg font-light">
                To bridge the gap between healthcare manufacturers and providers
                by offering unparalleled distribution services. We are committed
                to maintaining the highest standards of quality, safety, and
                compliance in every aspect of our operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <SectionTitle
            title="Our Infrastructure"
            subtitle="State-of-the-Art Facilities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif mb-4">Modern Warehousing</h3>
              <p className="text-text-light mb-6">
                Our facilities are equipped with the latest technology for
                inventory management and climate control, ensuring that all
                pharmaceutical products are stored under optimal conditions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand"></span>{" "}
                  Temperature-controlled zones
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand"></span>{" "}
                  Advanced security systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand"></span>{" "}
                  Automated inventory tracking
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-video"
            >
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1473&auto=format&fit=crop"
                alt="Warehouse"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-transparent">
        <div className="container-custom text-center">
          <SectionTitle title="Our Journey" subtitle="Milestones" />
          <div className="max-w-4xl mx-auto mt-12 relative border-l-2 border-brand-light pl-8 text-left">
            {[
              {
                year: "2010",
                title: "Inception",
                desc: "Started operations with a small team and a vision to transform healthcare distribution.",
              },
              {
                year: "2015",
                title: "Expansion",
                desc: "Expanded our reach across multiple districts and partnered with top-tier brands.",
              },
              {
                year: "2020",
                title: "Modernization",
                desc: "Upgraded to state-of-the-art climate-controlled facilities and digital inventory systems.",
              },
              {
                year: "2024",
                title: "Market Leaders",
                desc: "Recognized as one of the most reliable pharma distributors in the region.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mb-10 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand border-4 border-white"></div>
                <h4 className="text-xl font-bold text-brand mb-2">
                  {item.year} - {item.title}
                </h4>
                <p className="text-text-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default About;
