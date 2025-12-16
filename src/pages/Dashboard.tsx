import React, { useState } from 'react';
import { LayoutDashboard, Image, Settings, Upload, LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('banners');

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-[#1C1C1C]">Admin Panel</h2>
                    <p className="text-xs text-gray-500">Content Management System</p>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <button
                        onClick={() => setActiveTab('banners')}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === 'banners' ? 'bg-[#1A71B7] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <Image size={18} />
                        Banners
                    </button>
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === 'gallery' ? 'bg-[#1A71B7] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <LayoutDashboard size={18} />
                        Gallery
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === 'projects' ? 'bg-[#1A71B7] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <Settings size={18} />
                        Projects
                    </button>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-800 capitalize">{activeTab} Management</h1>
                </header>

                <div className="p-8">
                    {/* Placeholder for Upload Section based on Tab */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 border-dashed mb-8 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <Upload size={32} className="text-[#1A71B7]" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Upload New Image</h3>
                        <p className="text-gray-500 text-sm mb-4">PNG, JPG up to 10MB</p>
                        <button className="px-6 py-2 bg-[#1A71B7] text-white rounded-md font-medium hover:bg-[#155a93] transition-colors">
                            Select Files
                        </button>
                    </div>

                    {/* Placeholder Grid for Existing Items */}
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Existing Items</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm group">
                                <div className="aspect-video bg-gray-100 relative">
                                    <img src={`https://source.unsplash.com/random/400x300?sig=${i}`} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <button className="p-2 bg-white rounded-full text-blue-600 hover:bg-gray-100">Edit</button>
                                        <button className="p-2 bg-white rounded-full text-red-600 hover:bg-gray-100">Delete</button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="font-medium text-gray-900 truncate">Image_{i}.jpg</p>
                                    <p className="text-xs text-gray-500">Uploaded 2h ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
