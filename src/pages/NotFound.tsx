import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center">
      <div className="text-center px-4 py-12">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-secondary-500" />
        </div>
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-neutral-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;