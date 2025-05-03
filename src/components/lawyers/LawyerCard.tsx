import React from 'react';
import { Star, MapPin, Languages, Award, Shield } from 'lucide-react';

interface LawyerCardProps {
  name: string;
  image: string;
  specialization: string;
  experience: number;
  rating: number;
  location: string;
  languages: string[];
  verified: boolean;
  consultationFee: number;
  education: string;
  barCouncilId: string;
}

const LawyerCard: React.FC<LawyerCardProps> = ({
  name,
  image,
  specialization,
  experience,
  rating,
  location,
  languages,
  verified,
  consultationFee,
  education,
  barCouncilId
}) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {verified && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            Verified
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">{name}</h3>
            <p className="text-primary-600 font-medium">{specialization}</p>
          </div>
          <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-primary-600 mr-1" />
            <span className="font-medium text-primary-600">{rating}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-neutral-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-neutral-600">
            <Languages className="w-4 h-4 mr-2" />
            <span>{languages.join(', ')}</span>
          </div>
          <div className="flex items-center text-neutral-600">
            <Award className="w-4 h-4 mr-2" />
            <span>{experience} years experience</span>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-neutral-600">Consultation Fee</p>
              <p className="text-lg font-semibold text-neutral-900">₹{consultationFee}</p>
            </div>
            <button className="btn-primary">
              Book Consultation
            </button>
          </div>
          
          <div className="text-sm text-neutral-600">
            <p>Education: {education}</p>
            <p>Bar Council ID: {barCouncilId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;