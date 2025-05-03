import React from 'react';
import { motion } from 'framer-motion';
import { Building, FileText, Scale, Shield } from 'lucide-react';
import LawyerCard from '../../components/lawyers/LawyerCard';

const CorporateLawPage: React.FC = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-primary-600" />,
      title: "Business Formation",
      description: "Company incorporation, partnership registration, and business structuring"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "Corporate Compliance",
      description: "Regulatory compliance, corporate governance, and legal documentation"
    },
    {
      icon: <Scale className="w-8 h-8 text-primary-600" />,
      title: "Contract Management",
      description: "Contract drafting, review, and negotiation for business agreements"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Legal Advisory",
      description: "Strategic legal advice for corporate decision-making and risk management"
    }
  ];

  const lawyers = [
    {
      name: "Adv. Arun Mehta",
      image: "https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg",
      specialization: "Corporate Law",
      experience: 18,
      rating: 4.9,
      location: "Mumbai",
      languages: ["English", "Hindi", "Gujarati"],
      verified: true,
      consultationFee: 5000,
      education: "LLM Corporate Law, Harvard Law School",
      barCouncilId: "MH/789/2005"
    },
    {
      name: "Adv. Sneha Reddy",
      image: "https://images.pexels.com/photos/5668895/pexels-photo-5668895.jpeg",
      specialization: "Corporate Law",
      experience: 15,
      rating: 4.8,
      location: "Bangalore",
      languages: ["English", "Hindi", "Kannada"],
      verified: true,
      consultationFee: 4500,
      education: "LLM, National Law School",
      barCouncilId: "KA/234/2008"
    }
  ];

  return (
    <div className="corporate-law-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-950 text-white py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Law
            </h1>
            <p className="text-xl text-neutral-200">
              Comprehensive legal solutions for businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Our Corporate Legal Services
            </h2>
            <p className="text-xl text-neutral-600">
              Expert legal support for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lawyers Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Corporate Law Experts
            </h2>
            <p className="text-xl text-neutral-600">
              Connect with experienced corporate lawyers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LawyerCard {...lawyer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateLawPage;