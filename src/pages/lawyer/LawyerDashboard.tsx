import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { FileText, Users, Calendar as CalendarIcon, MessageSquare, Clock, AlertCircle, Search, Download } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FetchLawyerDataModal from '../../components/lawyers/FetchLawyerDataModal';

const LawyerDashboard: React.FC = () => {
  const { isAuthenticated, userType } = useAuthStore();
  const [cnrNumber, setCnrNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [isFetchModalOpen, setIsFetchModalOpen] = useState(false);

  if (!isAuthenticated || userType !== 'lawyer') {
    return <Navigate to="/lawyer/login" />;
  }

  const caseStats = [
    { label: 'Active Cases', value: '12', icon: FileText, color: 'bg-primary-100 text-primary-600', link: '/lawyer/cases' },
    { label: 'Clients', value: '45', icon: Users, color: 'bg-secondary-100 text-secondary-600', link: '/lawyer/clients' },
    { label: 'Upcoming Hearings', value: '8', icon: CalendarIcon, color: 'bg-green-100 text-green-600', link: '/lawyer/hearings' },
    { label: 'Pending Tasks', value: '15', icon: Clock, color: 'bg-amber-100 text-amber-600', link: '/lawyer/tasks' },
  ];

  const handleCNRSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (cnrNumber) {
      window.location.href = `/lawyer/cases/${cnrNumber}`;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Welcome back, Advocate</h1>
            <p className="text-neutral-600">Here's an overview of your cases and activities</p>
          </div>
          <button 
            onClick={() => setIsFetchModalOpen(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Fetch Updated Lawyer Data
          </button>
        </div>

        {/* CNR Search */}
        <div className="mb-8">
          <form onSubmit={handleCNRSearch} className="max-w-lg">
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter CNR Number"
                  className="input-field"
                  value={cnrNumber}
                  onChange={(e) => setCnrNumber(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Case
              </button>
            </div>
          </form>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {caseStats.map((stat) => (
            <Link 
              key={stat.label} 
              to={stat.link}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-neutral-900">{stat.value}</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-neutral-700">{stat.label}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Calendar</h2>
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full border-0 rounded-lg"
              />
            </div>
          </div>

          {/* Recent Activities */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {[
                  {
                    type: 'Evidence Filed',
                    date: '19-03-2025',
                    description: 'Further Evidence submitted in case WBBB0F0000562012'
                  },
                  {
                    type: 'Hearing Completed',
                    date: '11-03-2025',
                    description: 'Further Evidence hearing completed for case WBBB0F0000562012'
                  }
                ].map((activity, index) => (
                  <div key={index} className="border-b border-neutral-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <AlertCircle className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">{activity.type}</p>
                        <p className="text-sm text-neutral-600">{activity.description}</p>
                        <p className="text-sm text-neutral-500">{activity.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FetchLawyerDataModal
          isOpen={isFetchModalOpen}
          onClose={() => setIsFetchModalOpen(false)}
          currentLawyerName="Adv. Goutam Sarkar"
        />
      </div>
    </div>
  );
};

export default LawyerDashboard;