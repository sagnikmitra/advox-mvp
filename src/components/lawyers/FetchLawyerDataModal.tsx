import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FetchLawyerDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLawyerName?: string;
}

const FetchLawyerDataModal: React.FC<FetchLawyerDataModalProps> = ({
  isOpen,
  onClose,
  currentLawyerName = ''
}) => {
  const [searchType, setSearchType] = useState<'self' | 'other'>('self');
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    courtComplex: '',
    lawyerName: currentLawyerName
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Fetching data for:', formData);
    // Implement the actual data fetch logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-neutral-900">Fetch Updated Lawyer Data</h2>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Search Type
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={searchType === 'self'}
                  onChange={() => {
                    setSearchType('self');
                    setFormData(prev => ({ ...prev, lawyerName: currentLawyerName }));
                  }}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                />
                <span className="ml-2 text-sm text-neutral-700">Search for myself</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={searchType === 'other'}
                  onChange={() => {
                    setSearchType('other');
                    setFormData(prev => ({ ...prev, lawyerName: '' }));
                  }}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                />
                <span className="ml-2 text-sm text-neutral-700">Search for someone else</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
              State Name
            </label>
            <input
              type="text"
              id="state"
              required
              className="input-field"
              value={formData.state}
              onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="district" className="block text-sm font-medium text-neutral-700 mb-1">
              District Name
            </label>
            <input
              type="text"
              id="district"
              required
              className="input-field"
              value={formData.district}
              onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="courtComplex" className="block text-sm font-medium text-neutral-700 mb-1">
              Court Complex Name
            </label>
            <input
              type="text"
              id="courtComplex"
              required
              className="input-field"
              value={formData.courtComplex}
              onChange={(e) => setFormData(prev => ({ ...prev, courtComplex: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="lawyerName" className="block text-sm font-medium text-neutral-700 mb-1">
              Lawyer Name
            </label>
            <input
              type="text"
              id="lawyerName"
              required
              className="input-field"
              value={formData.lawyerName}
              onChange={(e) => setFormData(prev => ({ ...prev, lawyerName: e.target.value }))}
              readOnly={searchType === 'self'}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Fetch Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FetchLawyerDataModal;