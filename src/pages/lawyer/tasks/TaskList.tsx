import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const TaskList: React.FC = () => {
  const tasks = [
    {
      title: 'Prepare arguments for Tapan Kr. Chanda case',
      case: 'WBBB0F0000562012',
      dueDate: '05-05-2025',
      priority: 'High',
      status: 'Pending'
    },
    // Add more tasks here
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Tasks</h1>
          <p className="text-neutral-600">Manage your pending tasks and deadlines</p>
        </div>

        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900">{task.title}</h3>
                      <p className="text-sm text-neutral-600 mt-1">Case: {task.case}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <div className="flex items-center text-sm text-neutral-600">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Due: {task.dueDate}
                        </div>
                        <span className={`text-sm px-2 py-1 rounded ${
                          task.priority === 'High' 
                            ? 'bg-red-50 text-red-600' 
                            : 'bg-yellow-50 text-yellow-600'
                        }`}>
                          {task.priority} Priority
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="btn-outline flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Mark Complete</span>
                    </button>
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

export default TaskList;