import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const HearingList: React.FC = () => {
  const hearings = [
    {
      date: '07-05-2025',
      time: '10:30 AM',
      caseNumber: 'WBBB0F0000562012',
      client: 'Sri Tapan Kr. Chanda',
      type: 'Argument / Further Argument',
      court: 'Civil Judge, Jr. Divn. Bolpur, Birbhum',
      status: 'Upcoming'
    },
    // Add more hearings here
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Upcoming Hearings</h1>
          <p className="text-neutral-600">Track all your scheduled court appearances</p>
        </div>

        <div className="space-y-4">
          {hearings.map((hearing, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-neutral-900">{hearing.date}</h3>
                        <span className="text-sm text-neutral-600">at {hearing.time}</span>
                      </div>
                      <p className="text-sm text-neutral-600 mt-1">Case: {hearing.caseNumber}</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-neutral-600">
                          <Users className="w-4 h-4 mr-2" />
                          {hearing.client}
                        </div>
                        <div className="flex items-center text-sm text-neutral-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {hearing.court}
                        </div>
                        <div className="flex items-center text-sm text-neutral-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {hearing.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-50 text-green-600 text-sm px-2 py-1 rounded">
                    {hearing.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HearingList;