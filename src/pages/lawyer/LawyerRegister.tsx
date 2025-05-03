import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, Lock, Mail, User, Phone, Briefcase, MapPin } from 'lucide-react';

const LawyerRegister: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step 1 form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Step 2 form data
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [barCouncilId, setBarCouncilId] = useState('');
  const [practiceAreas, setPracticeAreas] = useState<string[]>([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const practiceAreaOptions = [
    'Family Law',
    'Property Law',
    'Criminal Law',
    'Corporate Law',
    'Civil Litigation',
    'Intellectual Property',
    'Tax Law',
    'Immigration Law'
  ];
  
  const togglePracticeArea = (area: string) => {
    if (practiceAreas.includes(area)) {
      setPracticeAreas(practiceAreas.filter(a => a !== area));
    } else {
      setPracticeAreas([...practiceAreas, area]);
    }
  };
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration functionality would be implemented here
  };
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <motion.div 
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-neutral-900">
            Lawyer Registration
          </h2>
          <p className="mt-2 text-neutral-600">
            Join LawYaar as a verified lawyer
          </p>
        </div>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
                1
              </div>
              <span className="text-xs mt-1">Account</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
                2
              </div>
              <span className="text-xs mt-1">Profile</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
                3
              </div>
              <span className="text-xs mt-1">Verification</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Step 1: Account Information */}
          {currentStep === 1 && (
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    className="input-field pl-10"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="input-field pl-10 pr-10"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-neutral-400 hover:text-neutral-600 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-xs text-neutral-500">
                  Password must be at least 8 characters long with a number and a special character.
                </p>
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-neutral-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="confirm-password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="input-field pl-10"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={nextStep}
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Step 2: Profile Information */}
          {currentStep === 2 && (
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="full-name"
                    type="text"
                    required
                    className="input-field pl-10"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="input-field pl-10"
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="bar-id" className="block text-sm font-medium text-neutral-700 mb-1">
                  Bar Council ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="bar-id"
                    type="text"
                    required
                    className="input-field pl-10"
                    placeholder="Your Bar Council ID"
                    value={barCouncilId}
                    onChange={(e) => setBarCouncilId(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Practice Areas (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {practiceAreaOptions.map((area) => (
                    <div key={area} className="flex items-center">
                      <input
                        id={`area-${area}`}
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                        checked={practiceAreas.includes(area)}
                        onChange={() => togglePracticeArea(area)}
                      />
                      <label htmlFor={`area-${area}`} className="ml-2 block text-sm text-neutral-700">
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      id="city"
                      type="text"
                      required
                      className="input-field pl-10"
                      placeholder="Your city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                    State
                  </label>
                  <select
                    id="state"
                    required
                    className="input-field"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="" disabled>Select state</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    {/* Add more states */}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  className="text-primary-600 hover:text-primary-500 font-medium"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={nextStep}
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Step 3: Verification */}
          {currentStep === 3 && (
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Document Verification</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Please upload the following documents for verification.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="id-proof" className="block text-sm font-medium text-neutral-700 mb-1">
                      ID Proof (Aadhar Card/PAN Card)
                    </label>
                    <input
                      id="id-proof"
                      type="file"
                      className="block w-full text-sm text-neutral-700
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0
                       file:text-sm file:font-medium
                       file:bg-primary-50 file:text-primary-600
                       hover:file:bg-primary-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bar-cert" className="block text-sm font-medium text-neutral-700 mb-1">
                      Bar Council Certificate
                    </label>
                    <input
                      id="bar-cert"
                      type="file"
                      className="block w-full text-sm text-neutral-700
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0
                       file:text-sm file:font-medium
                       file:bg-primary-50 file:text-primary-600
                       hover:file:bg-primary-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="profile-photo" className="block text-sm font-medium text-neutral-700 mb-1">
                      Professional Photo
                    </label>
                    <input
                      id="profile-photo"
                      type="file"
                      className="block w-full text-sm text-neutral-700
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0
                       file:text-sm file:font-medium
                       file:bg-primary-50 file:text-primary-600
                       hover:file:bg-primary-100"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-neutral-700">
                    I agree to the{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-500">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-500">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-primary-600 hover:text-primary-500 font-medium"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Complete Registration
                </button>
              </div>
            </motion.div>
          )}
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{' '}
            <Link to="/lawyer/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LawyerRegister;