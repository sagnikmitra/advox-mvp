import React from 'react';

const PropertyLawPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Property Law</h1>
      
      <div className="grid gap-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Property Law Services</h2>
          <p className="text-gray-600 mb-4">
            Our experienced property law team provides comprehensive legal services for all real estate
            and property matters. We handle both residential and commercial property cases with expertise
            and dedication.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">Residential Property</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Property purchases and sales</li>
                <li>Lease agreements</li>
                <li>Title searches and verification</li>
                <li>Property dispute resolution</li>
                <li>Mortgage and financing advice</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">Commercial Property</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Commercial real estate transactions</li>
                <li>Commercial lease agreements</li>
                <li>Property development contracts</li>
                <li>Zoning and land use issues</li>
                <li>Commercial property disputes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800">Expert Knowledge</h3>
              <p className="text-gray-600">
                Our team stays up-to-date with the latest property laws and regulations
                to provide you with accurate and current legal advice.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800">Proven Track Record</h3>
              <p className="text-gray-600">
                We have successfully handled numerous property cases and transactions,
                ensuring optimal outcomes for our clients.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800">Personalized Service</h3>
              <p className="text-gray-600">
                We provide tailored legal solutions that address your specific property
                needs and concerns.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertyLawPage;