import React from 'react';

const CriminalLawPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Criminal Law</h1>
      
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Criminal Law Services</h2>
          <p className="text-gray-600 mb-4">
            Our experienced criminal defense attorneys are dedicated to protecting your rights and providing
            aggressive representation in all types of criminal cases.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Criminal Defense</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Felony and Misdemeanor Cases</li>
                <li>• DUI Defense</li>
                <li>• Drug Offenses</li>
                <li>• Violent Crimes</li>
                <li>• White Collar Crimes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Additional Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Post-Conviction Relief</li>
                <li>• Appeals</li>
                <li>• Record Expungement</li>
                <li>• Bail Hearings</li>
                <li>• Probation Violations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Criminal Defense Team?</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4 text-gray-600">
              <li>✓ 24/7 Emergency Legal Support</li>
              <li>✓ Proven Track Record of Success</li>
              <li>✓ Personalized Defense Strategies</li>
              <li>✓ Extensive Trial Experience</li>
              <li>✓ Confidential Case Evaluation</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CriminalLawPage;