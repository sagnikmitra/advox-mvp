import React from 'react';
import { Scale } from 'lucide-react';

const TaxLawPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Tax Law</h1>
          <p className="mt-4 text-lg text-gray-500">
            Expert legal guidance for all your tax-related matters
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Planning</h3>
            <p className="text-gray-600">Strategic advice to optimize your tax position and ensure compliance with tax regulations.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Disputes</h3>
            <p className="text-gray-600">Representation in tax disputes and litigation with revenue authorities.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">International Tax</h3>
            <p className="text-gray-600">Guidance on cross-border transactions and international tax compliance.</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Tax Law Services</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our experienced tax lawyers provide comprehensive legal services in all areas of tax law, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Personal and corporate tax planning</li>
              <li>Tax compliance and reporting</li>
              <li>Tax dispute resolution</li>
              <li>International tax advisory</li>
              <li>GST/VAT consultation</li>
              <li>Tax implications of mergers and acquisitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxLawPage;