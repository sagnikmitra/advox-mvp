import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, MessageSquare, Clock } from 'lucide-react';
import LawyerCard from '../../components/lawyers/LawyerCard';

const CivilLitigationPage: React.FC = () => {
  const services = [
    {
      icon: <Scale className="w-8 h-8 text-primary-600" />,
      title: "Civil Disputes",
      description: "Resolution of civil disputes through litigation and alternative dispute resolution"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "Consumer Protection",
      description: "Legal representation in consumer disputes and protection cases"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary-600" />,
      title: "Arbitration",
      description: "Expert representation in arbitration proceedings"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Recovery Cases",
      description: "Legal assistance in debt recovery and monetary claims"
    }
  ];

  const lawyers = [
    {
      name: "Adv. Vikram Singh",
      image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg",
      specialization: "Civil Litigation",
      experience: 20,
      rating: 4.9,
      location: "Delhi",
      languages: ["English", "Hindi", "Punjabi"],
      verified: true,
      consultationFee: 3000,
      education: "LLM, Delhi University",
      barCouncilId: "DL/567/2003"
    },
    {
      name: "Adv. Meera Iyer",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg",
      specialization: "Civil Litigation",
      experience: 16,
      rating: 4.7,
      location: "Chennai",
      languages: ["English", "Tamil", "Hindi"],
      verified: true,
      consultationFee: 2800,
      education: "LLB, Madras Law College",
      barCouncilId: "TN/345/2007"
    }
  ];

  return (
    <div className="civil-litigation-page">
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
              Civil Litigation
            </h1>
            <p className="text-xl text-neutral-200">
              Expert representation in civil legal matters
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
              Our Civil Litigation Services
            </h2>
            <p className="text-xl text-neutral-600">
              Comprehensive legal support for civil matters
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
              Civil Litigation Experts
            </h2>
            <p className="text-xl text-neutral-600">
              Connect with experienced civil litigation lawyers
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

export default CivilLitigationPage;