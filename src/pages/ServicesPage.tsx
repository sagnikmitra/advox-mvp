import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Scale, Shield, MessageSquare, FileText, CreditCard, Calendar, Search, Clock, CheckCircle, Users, Building, Briefcase, Landmark, Brain, Coins as Coins, Plane } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const saralVakilFeatures = [
    {
      icon: <FileText className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Case Management",
      description: "Organize client records, case files, and documents with automated document generation"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Calendar & Deadlines",
      description: "Never miss a court date with integrated calendar and automated reminders"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Billing & Payments",
      description: "Simplify time tracking and invoicing with GST-compliant billing system"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Secure Communications",
      description: "End-to-end encrypted client communication platform"
    }
  ];

  const nyayConnectFeatures = [
    {
      icon: <Search className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Smart Lawyer Search",
      description: "Find lawyers by expertise, location, language, and fees"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Instant Booking",
      description: "Book consultations instantly with real-time availability"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Secure Payments",
      description: "Protected payments with escrow support and multiple payment options"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Verified Lawyers",
      description: "All lawyers are verified for credentials and expertise"
    }
  ];

  const practiceAreas = [
    {
      icon: <Users className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Family Law",
      description: "Divorce, custody, maintenance, and family disputes"
    },
    {
      icon: <Building className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Property Law",
      description: "Real estate, tenant disputes, and property documentation"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Criminal Law",
      description: "Criminal defense and prosecution services"
    },
    {
      icon: <Landmark className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Corporate Law",
      description: "Business formation, compliance, and contracts"
    },
    {
      icon: <Scale className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Civil Litigation",
      description: "Civil suits, consumer disputes, and arbitration"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Intellectual Property",
      description: "Patents, trademarks, and copyright protection"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Tax Law",
      description: "Tax planning, compliance, and dispute resolution"
    },
    {
      icon: <Plane className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: "Immigration Law",
      description: "Visa applications, citizenship, and immigration matters"
    }
  ];

  return (
    <div className="services-page">
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
              Our Services
            </h1>
            <p className="text-xl text-neutral-200">
              Comprehensive legal solutions for lawyers and clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Saral Vakil Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Saral Vakil
              </h2>
              <p className="text-xl text-primary-600 dark:text-secondary-400 mb-6">
                Modernize Your Law Practice
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                A comprehensive practice management solution designed specifically for Indian lawyers and law firms. Streamline your operations, manage cases efficiently, and grow your practice.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {saralVakilFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/lawyer/register" className="btn-primary">
                  Join as a Lawyer
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-first md:order-last"
            >
              <img 
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Lawyer using Saral Vakil"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nyay Connect Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Client using Nyay Connect"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Nyay Connect
              </h2>
              <p className="text-xl text-primary-600 dark:text-secondary-400 mb-6">
                Find the Right Legal Help
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                A user-friendly platform connecting individuals and businesses with verified lawyers. Get expert legal help quickly and securely, with transparent pricing and easy communication.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {nyayConnectFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/client/register" className="btn-secondary">
                  Find a Lawyer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Practice Areas
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Find expert lawyers across various legal domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="card hover:border-2 hover:border-primary-200 dark:hover:border-secondary-700 cursor-pointer dark:bg-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {area.icon}
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-100 mb-8">
              Join thousands of lawyers and clients already using LawYaar
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/lawyer/register" className="btn-secondary">
                Register as a Lawyer
              </Link>
              <Link to="/client/register" className="btn-outline bg-white/10 text-white">
                Find a Lawyer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;