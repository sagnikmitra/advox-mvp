import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileText, Calendar, Clock, AlertCircle, Users, Share2, Upload, FileIcon, Link as LinkIcon } from 'lucide-react';

const CaseDetail: React.FC = () => {
  const { cnr } = useParams();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentComment, setDocumentComment] = useState('');

  const caseDetails = {
    advoxRecordNo: 'ADV2025001234',
    caseNumber: 'WBBB0F0000562012',
    court: 'Civil Judge, Jr. Divn. Bolpur, Birbhum',
    type: 'Title Suit',
    status: 'Argument / Further Argument',
    nextHearing: '07-05-2025',
    lawyer: 'Adv. Goutam Sarkar',
    filingDate: '07-05-2012',
    totalHearings: 49,
    petitioner: 'Sri Tapan Kr. Chanda',
    respondent: 'Smt. Sujata Chanda'
  };

  const caseSummary = {
    title: "Property Dispute between Spouses",
    description: "Case involves dispute over jointly owned property post-separation. Petitioner claims exclusive ownership rights based on financial contribution.",
    currentStage: "Evidence Stage",
    keyIssues: [
      "Determination of ownership rights",
      "Division of property",
      "Financial contributions assessment"
    ]
  };

  const proceedingStatus = {
    currentPhase: "Evidence Stage",
    lastAction: "Witness examination completed",
    nextSteps: "Cross-examination of respondent's witnesses",
    criticalDates: "Next hearing scheduled for documentary evidence presentation"
  };

  const hearingHistory = [
    {
      date: '19-03-2025',
      type: 'Further Evidence',
      description: 'Witness examination conducted for petitioner side',
      comments: 'Key testimony recorded regarding property purchase',
      notes: 'Important documents submitted regarding financial transactions'
    },
    {
      date: '11-03-2025',
      type: 'Further Evidence',
      description: 'Document verification',
      comments: 'Property papers examined',
      notes: 'Some documents require additional verification'
    }
  ];

  const interimOrders = [
    {
      date: '12-06-2024',
      status: 'Issued',
      description: 'Temporary injunction on property transfer',
      documentLink: 'https://example.com/doc1'
    },
    {
      date: '14-03-2024',
      status: 'Issued',
      description: 'Maintenance order',
      documentLink: 'https://example.com/doc2'
    }
  ];

  const documents = [
    {
      name: 'Property Deed.pdf',
      uploadDate: '15-03-2025',
      comment: 'Original property registration document'
    },
    {
      name: 'Bank Statements.pdf',
      uploadDate: '10-03-2025',
      comment: 'Financial contribution proof'
    }
  ];

  const lawyerHistory = [
    {
      name: 'Adv. Rajesh Kumar',
      period: 'Jan 2012 - Dec 2015',
      reason: 'Lawyer relocated to different city'
    },
    {
      name: 'Adv. Goutam Sarkar',
      period: 'Jan 2016 - Present',
      status: 'Current representing lawyer'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleDocumentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle document upload logic here
    console.log('Uploading:', selectedFile, 'Comment:', documentComment);
    setSelectedFile(null);
    setDocumentComment('');
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Case Details</h1>
            <p className="text-neutral-600">Advox Record No: {caseDetails.advoxRecordNo}</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share with Lawyers
          </button>
        </div>

        {/* Case Summary */}
        <div className="card mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Case Summary</h2>
            <div className="space-y-4">
              <p className="text-neutral-700"><strong>Title:</strong> {caseSummary.title}</p>
              <p className="text-neutral-700"><strong>Description:</strong> {caseSummary.description}</p>
              <div>
                <p className="font-medium text-neutral-700">Key Issues:</p>
                <ul className="list-disc list-inside text-neutral-600 mt-2">
                  {caseSummary.keyIssues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Current Proceeding Status */}
        <div className="card mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Current Proceeding Status</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-neutral-600">Current Phase</p>
                <p className="font-medium text-neutral-900">{proceedingStatus.currentPhase}</p>
              </div>
              <div>
                <p className="text-neutral-600">Last Action</p>
                <p className="font-medium text-neutral-900">{proceedingStatus.lastAction}</p>
              </div>
              <div>
                <p className="text-neutral-600">Next Steps</p>
                <p className="font-medium text-neutral-900">{proceedingStatus.nextSteps}</p>
              </div>
              <div>
                <p className="text-neutral-600">Critical Dates</p>
                <p className="font-medium text-neutral-900">{proceedingStatus.criticalDates}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Overview */}
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

        {/* Case Parties */}
        <div className="card mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Case Parties</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-neutral-600">Petitioner</p>
                <p className="font-medium text-neutral-900">{caseDetails.petitioner}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-600">Respondent</p>
                <p className="font-medium text-neutral-900">{caseDetails.respondent}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Hearings */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Hearings</h2>
              <div className="space-y-6">
                {hearingHistory.map((hearing, index) => (
                  <div key={index} className="border-b border-neutral-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-neutral-400 mt-1 mr-3" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-neutral-900">{hearing.type}</p>
                          <span className="text-sm text-neutral-600">({hearing.date})</span>
                        </div>
                        <p className="text-neutral-700 mt-2">{hearing.description}</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm text-neutral-600"><strong>Comments:</strong> {hearing.comments}</p>
                          <p className="text-sm text-neutral-600"><strong>Notes:</strong> {hearing.notes}</p>
                        </div>
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
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Interim Orders</h2>
              <div className="space-y-6">
                {interimOrders.map((order, index) => (
                  <div key={index} className="border-b border-neutral-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-neutral-400 mt-1 mr-3" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-neutral-900">Order {order.status}</p>
                          <span className="text-sm text-neutral-600">({order.date})</span>
                        </div>
                        <p className="text-neutral-700 mt-2">{order.description}</p>
                        <a 
                          href={order.documentLink} 
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileIcon className="w-4 h-4 mr-1" />
                          View Document
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="card mt-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Documents</h2>
            
            {/* Upload Form */}
            <form onSubmit={handleDocumentSubmit} className="mb-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="block w-full text-sm text-neutral-700
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-medium
                     file:bg-primary-50 file:text-primary-600
                     hover:file:bg-primary-100"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Add comment"
                  value={documentComment}
                  onChange={(e) => setDocumentComment(e.target.value)}
                  className="flex-1 input-field"
                />
                <button type="submit" className="btn-primary flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload
                </button>
              </div>
            </form>

            {/* Documents List */}
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-neutral-400" />
                    <div>
                      <p className="font-medium text-neutral-900">{doc.name}</p>
                      <p className="text-sm text-neutral-600">{doc.comment}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500">{doc.uploadDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lawyer History */}
        <div className="card mt-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Lawyer History</h2>
            <div className="space-y-4">
              {lawyerHistory.map((lawyer, index) => (
                <div key={index} className="flex items-start gap-4 border-b border-neutral-200 last:border-0 pb-4 last:pb-0">
                  <Users className="w-5 h-5 text-neutral-400 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">{lawyer.name}</p>
                    <p className="text-sm text-neutral-600">{lawyer.period}</p>
                    <p className="text-sm text-neutral-500 mt-1">{lawyer.reason || lawyer.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;