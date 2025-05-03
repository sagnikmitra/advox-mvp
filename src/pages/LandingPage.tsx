import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, MessageSquare, FileText, CreditCard, CheckCircle, Scale, Building, Briefcase, Landmark, Brain, Coins, Plane, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const practiceAreas = [
    {
      icon: <Users className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: t('landing.practice_areas.family'),
      description: "Expert guidance in divorce, custody, and family matters",
      link: "/practice-areas/family-law"
    },
    {
      icon: <Building className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: t('landing.practice_areas.property'),
      description: "Real estate and property law expertise",
      link: "/practice-areas/property-law"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: t('landing.practice_areas.criminal'),
      description: "Criminal Defense and Prosecution services",
      link: "/practice-areas/criminal-law"
    },
    {
      icon: <Landmark className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: t('landing.practice_areas.corporate'),
      description: "Business and corporate legal solutions",
      link: "/practice-areas/corporate-law"
    },
    {
      icon: <Scale className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: t('landing.practice_areas.civil'),
      description: "Civil litigation and dispute resolution",
      link: "/practice-areas/civil-litigation"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary-600 dark:text-secondary-400" />,
      title: t('landing.practice_areas.tax'),
      description: "Tax planning, compliance, and dispute resolution",
      link: "/practice-areas/tax-law"
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom relative py-20 md:py-32">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-agrandir-wide font-bold mb-6">
              {t('landing.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl font-agrandir text-neutral-200">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <Link to="/client/register" className="btn-secondary text-center text-lg">
                {t('landing.hero.find_lawyer')}
              </Link>
              <Link to="/lawyer/register" className="btn-outline bg-white/10 text-white text-center text-lg">
                {t('landing.hero.lawyer_login')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('landing.features.title')}
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="card"
              variants={fadeIn}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {t('landing.features.verified.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('landing.features.verified.description')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              variants={fadeIn}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {t('landing.features.secure.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('landing.features.secure.description')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              variants={fadeIn}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {t('landing.features.ecourts.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('landing.features.ecourts.description')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              variants={fadeIn}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <CreditCard className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {t('landing.features.payments.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('landing.features.payments.description')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Lawyers Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('landing.for_lawyers.title')}
              </h2>
              <h3 className="text-xl text-primary-600 mb-6">
                {t('landing.for_lawyers.subtitle')}
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_lawyers.case_management')}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_lawyers.client_billing')}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_lawyers.document_storage')}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_lawyers.client_communication')}
                  </span>
                </li>
              </ul>
              
              <Link to="/lawyer/register" className="btn-primary">
                {t('landing.for_lawyers.cta')}
              </Link>
            </motion.div>
            
            <motion.div
              className="order-first md:order-last"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Lawyer working on laptop" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Client meeting lawyer" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('landing.for_clients.title')}
              </h2>
              <h3 className="text-xl text-primary-600 mb-6">
                {t('landing.for_clients.subtitle')}
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_clients.find_lawyers')}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_clients.transparent_fees')}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_clients.secure_payments')}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3" />
                  <span className="text-neutral-700">
                    {t('landing.for_clients.track_cases')}
                  </span>
                </li>
              </ul>
              
              <Link to="/client/register" className="btn-secondary">
                {t('landing.for_clients.cta')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('landing.practice_areas.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('landing.practice_areas.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="card hover:border-2 hover:border-primary-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={area.link} className="block p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {area.icon}
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600">
                    {area.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('landing.testimonials.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-secondary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-neutral-700 mb-6 flex-grow">
                  {t('landing.testimonials.client.quote')}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                    RS
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-900">
                      {t('landing.testimonials.client.name')}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {t('landing.testimonials.client.role')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-secondary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-neutral-700 mb-6 flex-grow">
                  {t('landing.testimonials.lawyer.quote')}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                    PP
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-900">
                      {t('landing.testimonials.lawyer.name')}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {t('landing.testimonials.lawyer.role')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              {t('landing.cta.title')}
            </h2>
            <p className="text-lg text-neutral-100 mb-8">
              {t('landing.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/lawyer/register" className="btn-secondary">
                {t('landing.cta.lawyer_button')}
              </Link>
              <Link to="/client/register" className="btn-outline bg-white/10 text-white">
                {t('landing.cta.client_button')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;