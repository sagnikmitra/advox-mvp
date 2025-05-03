import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { FileText, Scale, Calendar, MessageSquare, Clock } from 'lucide-react';

const ClientDashboard: React.FC = () => {
  const { isAuthenticated, userType } = useAuthStore();

  if (!isAuthenticated || userType !== 'client') {
    return <Navigate to="/client/login" />;
  }

  const caseDetails = {
    caseNumber: 'WBBB0F0000562012',
    court: 'Civil Judge, Jr. Divn. Bolpur, Birbhum',
    type: 'Title Suit',
    status: 'Argument / Further Argument',
    nextHearing: '07-05-2025',
    lawyer: 'Adv. Goutam Sarkar',
    filingDate: '07-05-2012',
    totalHearings: 49
  };

  const hearingHistory = [
    { date: '19-03-2025', type: 'Further Evidence' },
    { date: '11-03-2025', type: 'Further Evidence' },
    { date: '27-02-2025', type: 'Further Evidence' },
    { date: '29-01-2025', type: 'Further Evidence' },
    { date: '21-01-2025', type: 'Further Evidence' },
    { date: '08-01-2025', type: 'Argument / Further Argument' }
  ];

  const interimOrders = [
    { date: '12-06-2024', status: 'Issued' },
    { date: '14-03-2024', status: 'Issued' },
    { date: '24-01-2024', status: 'Issued' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Welcome back, Sri Tapan Kr. Chanda</h1>
          <p className="text-neutral-600">Here's the latest update on your case</p>
        </div>

        {/* Case Overview Card */}
        <div className="card mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Case Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-neutral-600">Case Number</p>
                <p className="font-medium text-neutral-900">{caseDetails.caseNumber}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">Court</p>
                <p className="font-medium text-neutral-900">{caseDetails.court}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">Case Type</p>
                <p className="font-medium text-neutral-900">{caseDetails.type}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">Current Status</p>
                <p className="font-medium text-primary-600">{caseDetails.status}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Next Hearing Card */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Next Hearing</h2>
              <div className="flex items-center justify-between bg-primary-50 p-4 rounded-lg">
                <div>
                  <Calendar className="w-8 h-8 text-primary-600 mb-2" />
                  <p className="text-sm text-neutral-600">Scheduled Date</p>
                  <p className="text-lg font-semibold text-primary-600">{caseDetails.nextHearing}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-600">Current Stage</p>
                  <p className="font-medium text-neutral-900">{caseDetails.status}</p>
                  <p className="text-sm text-neutral-600 mt-2">With {caseDetails.lawyer}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Statistics */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Case Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-sm text-neutral-600">Total Hearings</p>
                  <p className="text-2xl font-bold text-neutral-900">{caseDetails.totalHearings}</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-sm text-neutral-600">Case Age</p>
                  <p className="text-2xl font-bold text-neutral-900">13 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Hearing History */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Hearings</h2>
              <div className="space-y-4">
                {hearingHistory.map((hearing, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-neutral-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-neutral-400 mr-3" />
                      <div>
                        <p className="font-medium text-neutral-900">{hearing.type}</p>
                        <p className="text-sm text-neutral-600">{hearing.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interim Orders */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Interim Orders</h2>
              <div className="space-y-4">
                {interimOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-neutral-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center">
                      <Scale className="w-5 h-5 text-neutral-400 mr-3" />
                      <div>
                        <p className="font-medium text-neutral-900">Order {order.status}</p>
                        <p className="text-sm text-neutral-600">{order.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;