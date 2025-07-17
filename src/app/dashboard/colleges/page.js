"use client"
import React, { useState } from 'react';

export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState('');
  const [colleges, setColleges] = useState([
    { id: 1, name: 'University of Springfield', location: 'Springfield, IL', students: '15,000', rating: 4.5, status: 'Active' },
    { id: 2, name: 'State College of Harmony', location: 'Harmony, CA', students: '12,000', rating: 4.2, status: 'Active' },
    { id: 3, name: 'Institute of Innovation', location: 'Techville, TX', students: '18,000', rating: 4.8, status: 'Active' },
    { id: 4, name: 'Metropolitan University', location: 'Metro City, NY', students: '20,000', rating: 4.6, status: 'Active' },
    { id: 5, name: 'Coastal Community College', location: 'Coastal Town, FL', students: '8,000', rating: 3.9, status: 'Inactive' },
    { id: 6, name: 'Mountain View Academy', location: 'Mountain View, CO', students: '5,000', rating: 3.7, status: 'Inactive' },
    { id: 7, name: 'Lakeside Technical Institute', location: 'Lakeside, MI', students: '10,000', rating: 4.5, status: 'Active' },
    { id: 8, name: 'Riverdale Arts College', location: 'Riverdale, GA', students: '7,000', rating: 4.2, status: 'Active' },
    { id: 9, name: 'Greenfield Agricultural University', location: 'Greenfield, IA', students: '6,000', rating: 3.9, status: 'Inactive' },
    { id: 10, name: 'Central Business School', location: 'Central City, OH', students: '14,000', rating: 4.6, status: 'Active' },
  ]);

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAction = (collegeId, action) => {
    if (action === 'delete') {
      setColleges(colleges.filter(college => college.id !== collegeId));
    } else if (action === 'toggle-status') {
      setColleges(colleges.map(college =>
        college.id === collegeId
          ? { ...college, status: college.status === 'Active' ? 'Inactive' : 'Active' }
          : college
      ));
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header - Matching Users component */}
      <header className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 text-blue-500">
            <svg viewBox="0 0 48 48" fill="currentColor">
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">CampusConnect</h2>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          <nav className="hidden sm:flex space-x-4">
            <a href="#" className="text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600">Dashboard</a>
            <a href="#" className="text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600">Bookings</a>
            <a href="#" className="text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600">Services</a>
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400">Colleges</a>
          </nav>

          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
            </svg>
          </button>

          <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDZj0fivRIQZ2gUHHCJwSIm5NObJn2qHTh31cf8Wuqd1mYgAuBezcOi5G-4_JGxeqrNvIlFPKwXFP7TjbT0Z4hN7kR5EtWz7T0BlsH2ebpK686wljp89i-HmWQhCuKhv-XuTCEEDWIgTs1VThiZDu1hbj0lCAesJ-eSwf9Fl6BGqnQtUitVj53a8zszOGt6ZOQVv99b5R3Jpg00aoyQrdGAWW8XQNpi9xMFtAt6McflahjySO8VgdA7d8OcGlRtM7Zj_ceTblTCmbk)' }} />
        </div>
      </header>

      {/* Main Content - Matching Users component structure */}
      <main className="px-4 py-6 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Colleges</h1>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
            Add College
          </button>
        </div>

        {/* Search - Matching Users component */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search colleges"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Colleges Table - Matching Users component style */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">College Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredColleges.map((college) => (
                <tr key={college.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{college.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{college.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{college.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {college.rating.toFixed(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${college.status === 'Active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
                      {college.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAction(college.id, 'toggle-status')}
                        className={`px-3 py-1.5 text-sm font-medium rounded-md ${college.status === 'Active'
                            ? 'text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                            : 'text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                          }`}
                      >
                        {college.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>
                      <button
                        onClick={() => handleAction(college.id, 'delete')}
                        className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}