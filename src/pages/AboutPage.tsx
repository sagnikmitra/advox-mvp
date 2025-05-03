import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Scale, Users, Globe, Rocket, Heart, Shield, MessageSquare, FileText } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <Scale className="w-8 h-8 text-primary-600" />,
      title: "Accessibility",
      description: "Making legal services available to everyone across India"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Trust",
      description: "Building a secure and reliable platform for legal services"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary-600" />,
      title: "Innovation",
      description: "Continuously improving and modernizing legal tech solutions"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Empowerment",
      description: "Enabling lawyers and clients to achieve their goals efficiently"
    }
  ];

  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "CEO & Co-founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Priya Patel",
      role: "CTO & Co-founder",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Legal",
      image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Meera Desai",
      role: "Head of Operations",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-950 text-white py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionizing Legal Services in India
            </h1>
            <p className="text-xl text-neutral-200">
              Building the future of legal tech through innovation, accessibility, and trust
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                LawYaar was born from a simple observation: accessing legal services in India was unnecessarily complex and inefficient. We saw lawyers struggling with paper-based systems and clients finding it difficult to connect with the right legal professionals.
              </p>
              <p className="text-neutral-700 mb-4">
                Our solution was to create an integrated platform that serves both sides of the legal service ecosystem. By combining Saral Vakil for lawyers and Nyay Connect for clients, we've built a comprehensive solution that makes legal services more accessible and efficient.
              </p>
              <p className="text-neutral-700">
                Today, we're proud to be leading the digital transformation of legal services in India, making them more accessible, transparent, and efficient for everyone.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-first md:order-last"
            >
              <img 
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center p-8">
                <Globe className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
                <p className="text-neutral-700">
                  To digitize and revolutionize the legal service ecosystem in India, making quality legal services accessible and efficient for everyone while empowering legal professionals with modern tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col items-center text-center p-8">
                <Rocket className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
                <p className="text-neutral-700">
                  To become India's leading legal technology platform, connecting millions of citizens with trusted legal professionals and providing lawyers with the tools they need to thrive in the digital age.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Values</h2>
            <p className="text-xl text-neutral-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center p-6">
                  {value.icon}
                  <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Team</h2>
            <p className="text-xl text-neutral-600">
              Meet the people behind LawYaar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-neutral-600">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-neutral-600 mb-8">
                Have questions? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="mailto:contact@lawyaar.com" className="btn-primary">
                  Email Us
                </a>
                <a href="/contact" className="btn-outline">
                  Contact Form
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;