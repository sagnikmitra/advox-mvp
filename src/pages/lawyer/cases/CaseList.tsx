import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';

const CaseList: React.FC = () => {
  const cases = [
    {
      cnr: 'WBBB0F0000562012',
      title: 'Sri Tapan Kr. Chanda vs Smt. Sujata Chanda',
      court: 'Civil Judge, Jr. Divn. Bolpur, Birbhum',
      type: 'Title Suit',
      nextHearing: '07-05-2025',
      status: 'Argument / Further Argument'
    },
    // Add more cases here
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Active Cases</h1>
          <p className="text-neutral-600">Manage and track all your active cases</p>
        </div>

        <div className="space-y-4">
          {cases.map((case_, index) => (
            <Link
              key={index}
              to={`/lawyer/cases/${case_.cnr}`}
              className="block card hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900">{case_.title}</h3>
                      <p className="text-sm text-neutral-600">CNR: {case_.cnr}</p>
                      <p className="text-sm text-neutral-600">{case_.court}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <span className="text-sm bg-primary-50 text-primary-600 px-2 py-1 rounded">
                          {case_.type}
                        </span>
                        <span className="text-sm text-neutral-600">
                          Next Hearing: {case_.nextHearing}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseList;