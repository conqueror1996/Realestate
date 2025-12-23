import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Filter, Search } from 'lucide-react';
import SEO from '../components/SEO';

// Mock Data
import { useProjects } from '../context/ProjectContext';

const ProjectsPage: React.FC = () => {
    const { city } = useParams<{ city?: string }>();
    const navigate = useNavigate();
    const { projects } = useProjects();
    const [filterCity, setFilterCity] = useState(city || 'all');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // Update filter when URL param changes
    useEffect(() => {
        if (city) {
            setFilterCity(city);
        } else {
            setFilterCity('all');
        }
    }, [city]);

    // Filter logic
    useEffect(() => {
        if (filterCity === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.city === filterCity));
        }
    }, [filterCity, projects]);



    // ... 

    // Helper for display name
    const getCityDisplayName = (c: string) => {
        if (c === 'mumbai_3.0') return 'Mumbai 3.0';
        return c.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    };

    const seoTitle = filterCity === 'all' ? 'All Projects' : `Projects in ${getCityDisplayName(filterCity)}`;
    const seoDesc = `Explore premium real estate projects in ${filterCity === 'all' ? 'Mumbai and Navi Mumbai' : getCityDisplayName(filterCity)}. Villa plots and land investments by Future Group.`;

    return (
        <div className="font-sans antialiased text-text-gray bg-white">
            <SEO title={seoTitle} description={seoDesc} />
            <TopBar />
            <Navbar />

            <main className="max-w-[1400px] mx-auto px-6 py-12">

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">

                    {/* City Tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                        {['all', 'mumbai', 'navi_mumbai', 'mumbai_3.0'].map((c) => (
                            <button
                                key={c}
                                onClick={() => setFilterCity(c)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-300
                   ${filterCity === c
                                        ? 'bg-[#1A71B7] text-white shadow-md'
                                        : 'bg-white text-gray-500 hover:bg-gray-200 border border-gray-200'}`}
                            >
                                {c === 'all' ? 'All Cities' : getCityDisplayName(c)}
                            </button>
                        ))}
                    </div>

                    {/* Search/Sort (Placeholder) */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#1A71B7]"
                            />
                        </div>
                        <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 text-gray-600">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Project Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                                {/* Image (Clickable) */}
                                <div
                                    className="relative h-64 overflow-hidden cursor-pointer"
                                    onClick={() => navigate(`/project/${project.id}`)}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider text-[#1A71B7] shadow-sm">
                                        {project.status}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3
                                            onClick={() => navigate(`/project/${project.id}`)}
                                            className="text-xl font-bold text-gray-800 cursor-pointer hover:text-[#1A71B7] transition-colors"
                                        >
                                            {project.title}
                                        </h3>
                                        <span className="bg-gray-100 text-gray-600 text-[10px] uppercase font-bold px-2 py-1 rounded">
                                            {project.type}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm">
                                        <MapPin size={16} />
                                        {project.location}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-gray-50">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-bold mb-1">Price</p>
                                            <p className="font-bold text-[#1A71B7]">{project.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-bold mb-1">Size</p>
                                            <p className="font-bold text-gray-700">{project.size}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <button
                                            onClick={() => navigate(`/project/${project.id}`)}
                                            className="w-full bg-[#1A71B7] text-white py-3 rounded font-bold uppercase tracking-wider text-sm hover:bg-[#155a93] transition-colors shadow-lg shadow-blue-100"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        <h3 className="text-xl font-medium text-gray-400">No projects found in this category.</h3>
                        <button
                            onClick={() => setFilterCity('all')}
                            className="mt-4 text-[#1A71B7] font-bold hover:underline"
                        >
                            View All Projects
                        </button>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
