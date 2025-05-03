import React from 'react';
import { motion } from 'framer-motion';
import { Users, Scale, FileText } from 'lucide-react';
import LawyerCard from '../../components/lawyers/LawyerCard';

const FamilyLawPage: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Divorce & Separation",
      description: "Expert guidance through divorce proceedings, settlements, and custody arrangements"
    },
    {
      icon: <Scale className="w-8 h-8 text-primary-600" />,
      title: "Child Custody",
      description: "Protecting your children's interests with compassionate legal representation"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "Marriage Registration",
      description: "Assistance with marriage documentation and legal registration"
    }
  ];

  const lawyers = [
    {
      name: "Adv. Priya Sharma",
      image: "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg",
      specialization: "Family Law",
      experience: 12,
      rating: 4.8,
      location: "New Delhi",
      languages: ["English", "Hindi"],
      verified: true,
      consultationFee: 2000,
      education: "LLB, Delhi University",
      barCouncilId: "DL/123/2010"
    },
    {
      name: "Adv. Rajesh Kumar",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
      specialization: "Family Law",
      experience: 15,
      rating: 4.9,
      location: "Mumbai",
      languages: ["English", "Hindi", "Marathi"],
      verified: true,
      consultationFee: 2500,
      education: "LLM, Mumbai University",
      barCouncilId: "MH/456/2008"
    }
  ];

  return (
    <div className="family-law-page">
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
              Family Law
            </h1>
            <p className="text-xl text-neutral-200">
              Expert legal assistance for all family matters
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
              Our Family Law Services
            </h2>
            <p className="text-xl text-neutral-600">
              Comprehensive legal solutions for families
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
              Expert Family Lawyers
            </h2>
            <p className="text-xl text-neutral-600">
              Connect with experienced family law practitioners
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

export default FamilyLawPage;