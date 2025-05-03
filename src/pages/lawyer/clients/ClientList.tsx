import React from 'react';
import { Users, Phone, MapPin, Mail } from 'lucide-react';

const ClientList: React.FC = () => {
  const clients = [
    {
      name: 'Sri Tapan Kr. Chanda',
      email: 'tapan.chanda@example.com',
      phone: '+91 98765 43210',
      location: 'Bolpur, West Bengal',
      activeCases: 1,
      joinedDate: '2012'
    },
    // Add more clients here
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Clients</h1>
          <p className="text-neutral-600">Manage your client relationships</p>
        </div>

        <div className="space-y-4">
          {clients.map((client, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900">{client.name}</h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-neutral-600">
                          <Mail className="w-4 h-4 mr-2" />
                          {client.email}
                        </div>
                        <div className="flex items-center text-sm text-neutral-600">
                          <Phone className="w-4 h-4 mr-2" />
                          {client.phone}
                        </div>
                        <div className="flex items-center text-sm text-neutral-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {client.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary-50 text-primary-600 text-sm px-2 py-1 rounded">
                      {client.activeCases} Active {client.activeCases === 1 ? 'Case' : 'Cases'}
                    </span>
                    <p className="text-sm text-neutral-500 mt-2">Client since {client.joinedDate}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientList;