import React, { useState } from 'react';
import { LayoutDashboard, Settings, LogOut, Milestone, FileText, UserCheck, Newspaper, Link as LinkIcon, Plus, Trash2, Info, Save } from 'lucide-react';
import { useProjects, type Project } from '../context/ProjectContext';
import { useContent } from '../context/ContentContext';
import AuthWrapper from '../components/AuthWrapper';
import PasswordSettings from '../components/PasswordSettings';
import ProjectForm from '../components/ProjectForm';
import ImageUpload from '../components/ImageUpload';

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const { projects, deleteProject, addProject, updateProject } = useProjects();
    const { content, updateSection, saveContent } = useContent();
    const [isSaving, setIsSaving] = useState(false);

    // Project Form State
    const [isEditingProject, setIsEditingProject] = useState(false);
    const [editingProjectId, setEditingProjectId] = useState<string | number | null>(null);
    const [projectForm, setProjectForm] = useState<Partial<Project>>({});

    // Tabs
    const tabs = [
        { id: 'projects', label: 'Projects', icon: LayoutDashboard },
        { id: 'journey', label: 'Journey', icon: Milestone },
        { id: 'brochures', label: 'Brochures', icon: FileText },
        { id: 'leadership', label: 'Leadership', icon: UserCheck },
        { id: 'news', label: 'News & Updates', icon: Newspaper },
        { id: 'connect', label: 'Connect Section', icon: LinkIcon },
        { id: 'about', label: 'About Us', icon: Info },
        { id: 'settings', label: 'Password Settings', icon: Settings },
    ];

    // --- Project Handlers ---
    const handleEditProject = (project: Project) => {
        setProjectForm(project);
        setEditingProjectId(project.id);
        setIsEditingProject(true);
    };

    const handleAddProject = () => {
        setProjectForm({
            title: '',
            location: '',
            city: 'mumbai',
            price: '',
            size: '',
            type: '',
            status: 'New Launch',
            image: '',
            heroImage: '',
            description: ''
        });
        setEditingProjectId(null);
        setIsEditingProject(true);
    };

    const handleProjectSubmit = (data: Project) => {
        if (editingProjectId) {
            updateProject(editingProjectId, data);
        } else {
            addProject(data);
        }
        setIsEditingProject(false);
    };

    const handleSaveContent = async () => {
        setIsSaving(true);
        try {
            await saveContent();
            alert('Content saved successfully!');
        } catch (error) {
            alert('Failed to save content. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };


    // --- Content Renders ---

    const renderLeadership = () => (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Leadership Note</h3>
            <div className="space-y-4">
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Name"
                    value={content.leadership.name}
                    onChange={e => updateSection('leadership', { ...content.leadership, name: e.target.value })}
                />
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Role"
                    value={content.leadership.role}
                    onChange={e => updateSection('leadership', { ...content.leadership, role: e.target.value })}
                />
                <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Message"
                    rows={4}
                    value={content.leadership.message}
                    onChange={e => updateSection('leadership', { ...content.leadership, message: e.target.value })}
                />
                <ImageUpload
                    label="Leader Image"
                    value={content.leadership.image}
                    onChange={val => updateSection('leadership', { ...content.leadership, image: val })}
                />
                <ImageUpload
                    label="Signature Image (Transparent PNG)"
                    value={content.leadership.signature}
                    onChange={val => updateSection('leadership', { ...content.leadership, signature: val })}
                />
            </div>
        </div>
    );

    const renderConnect = () => (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Connect Section Banner</h3>
            <div className="space-y-4">
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Title"
                    value={content.connect.title}
                    onChange={e => updateSection('connect', { ...content.connect, title: e.target.value })}
                />
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Subtitle"
                    value={content.connect.subtitle}
                    onChange={e => updateSection('connect', { ...content.connect, subtitle: e.target.value })}
                />
                <ImageUpload
                    label="Background Image"
                    value={content.connect.backgroundImage}
                    onChange={val => updateSection('connect', { ...content.connect, backgroundImage: val })}
                />
            </div>
        </div>
    );

    const renderAboutUs = () => (
        <div className="space-y-6 max-w-4xl">
            {/* Hero Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Hero Section</h3>
                <div className="space-y-4">
                    <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Hero Title"
                        rows={2}
                        value={content.aboutUs.heroTitle}
                        onChange={e => updateSection('aboutUs', { ...content.aboutUs, heroTitle: e.target.value })}
                    />
                    <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Hero Subtitle"
                        rows={3}
                        value={content.aboutUs.heroSubtitle}
                        onChange={e => updateSection('aboutUs', { ...content.aboutUs, heroSubtitle: e.target.value })}
                    />
                    <ImageUpload
                        label="Hero Background Image"
                        value={content.aboutUs.heroImage}
                        onChange={val => updateSection('aboutUs', { ...content.aboutUs, heroImage: val })}
                    />
                </div>
            </div>

            {/* Our Story */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Our Story</h3>
                <div className="space-y-4">
                    <input
                        className="w-full p-2 border rounded font-bold"
                        placeholder="Story Title"
                        value={content.aboutUs.storyTitle}
                        onChange={e => updateSection('aboutUs', { ...content.aboutUs, storyTitle: e.target.value })}
                    />
                    <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Story Description"
                        rows={6}
                        value={content.aboutUs.storyDescription}
                        onChange={e => updateSection('aboutUs', { ...content.aboutUs, storyDescription: e.target.value })}
                    />
                    <input
                        className="w-full p-2 border rounded"
                        placeholder="Years of Experience (e.g. 10+)"
                        value={content.aboutUs.yearsOfExperience}
                        onChange={e => updateSection('aboutUs', { ...content.aboutUs, yearsOfExperience: e.target.value })}
                    />
                    <ImageUpload
                        label="Story Image"
                        value={content.aboutUs.storyImage}
                        onChange={val => updateSection('aboutUs', { ...content.aboutUs, storyImage: val })}
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Key Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Projects</label>
                        <input
                            className="w-full p-2 border rounded"
                            value={content.aboutUs.stats.projects}
                            onChange={e => updateSection('aboutUs', { ...content.aboutUs, stats: { ...content.aboutUs.stats, projects: e.target.value } })}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Sq. Ft Developed</label>
                        <input
                            className="w-full p-2 border rounded"
                            value={content.aboutUs.stats.sqft}
                            onChange={e => updateSection('aboutUs', { ...content.aboutUs, stats: { ...content.aboutUs.stats, sqft: e.target.value } })}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Happy Families</label>
                        <input
                            className="w-full p-2 border rounded"
                            value={content.aboutUs.stats.families}
                            onChange={e => updateSection('aboutUs', { ...content.aboutUs, stats: { ...content.aboutUs.stats, families: e.target.value } })}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Legal Clarity</label>
                        <input
                            className="w-full p-2 border rounded"
                            value={content.aboutUs.stats.clarity}
                            onChange={e => updateSection('aboutUs', { ...content.aboutUs, stats: { ...content.aboutUs.stats, clarity: e.target.value } })}
                        />
                    </div>
                </div>
            </div>

            {/* Founder Note */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Founder's Note</h3>
                <div className="space-y-4">
                    <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Message"
                        rows={4}
                        value={content.aboutUs.founderMessage}
                        onChange={e => updateSection('aboutUs', { ...content.aboutUs, founderMessage: e.target.value })}
                    />
                    <input
                        className="w-full p-2 border rounded"
                        placeholder="Author Name / Title"
                        value={content.aboutUs.founderName}
                        onChange={e => updateSection('aboutUs', { ...content.aboutUs, founderName: e.target.value })}
                    />
                </div>
            </div>

            {/* Core Values */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Core Values</h3>
                <div className="space-y-4">
                    {content.aboutUs.values.map((val, idx) => (
                        <div key={idx} className="border p-4 rounded bg-gray-50">
                            <input
                                className="w-full p-2 border rounded mb-2 font-bold"
                                placeholder="Value Title"
                                value={val.title}
                                onChange={e => {
                                    const newValues = [...content.aboutUs.values];
                                    newValues[idx].title = e.target.value;
                                    updateSection('aboutUs', { ...content.aboutUs, values: newValues });
                                }}
                            />
                            <textarea
                                className="w-full p-2 border rounded"
                                placeholder="Value Description"
                                rows={2}
                                value={val.desc}
                                onChange={e => {
                                    const newValues = [...content.aboutUs.values];
                                    newValues[idx].desc = e.target.value;
                                    updateSection('aboutUs', { ...content.aboutUs, values: newValues });
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderListEditor = <T extends { id: string | number }>(
        title: string,
        items: T[],
        onUpdate: (items: T[]) => void,
        renderItem: (item: T, index: number) => React.ReactNode,
        getNewItem: () => T
    ) => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <button
                    onClick={() => onUpdate([...items, { ...getNewItem(), id: Date.now() }])}
                    className="bg-[#1A71B7] text-white px-4 py-2 rounded flex items-center gap-2"
                >
                    <Plus size={16} /> Add Item
                </button>
            </div>
            <div className="grid gap-4">
                {items.map((item, index) => (
                    <div key={item.id} className="bg-white p-4 rounded border border-gray-200 relative group">
                        <button
                            onClick={() => onUpdate(items.filter(i => i.id !== item.id))}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-[#1C1C1C]">Admin Panel</h2>
                    <p className="text-xs text-gray-500">CMS Dashboard</p>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === tab.id ? 'bg-[#1A71B7] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto p-8">
                <header className="mb-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800 capitalize">{activeTab} Management</h1>
                    <div className="flex gap-3">
                        {activeTab === 'projects' && !isEditingProject && (
                            <button onClick={handleAddProject} className="bg-[#1A71B7] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#155a93]">
                                <Plus size={16} /> Add Project
                            </button>
                        )}
                        {activeTab !== 'projects' && (
                            <button
                                onClick={handleSaveContent}
                                disabled={isSaving}
                                className="bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Save size={16} /> {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        )}
                    </div>
                </header>

                {activeTab === 'projects' && (
                    <>
                        {isEditingProject ? (
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <ProjectForm
                                    initialData={projectForm}
                                    onSubmit={handleProjectSubmit}
                                    onCancel={() => setIsEditingProject(false)}
                                    isEditing={!!editingProjectId}
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project) => (
                                    <div key={project.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm group">
                                        <div className="aspect-video bg-gray-100 relative">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                <button onClick={() => handleEditProject(project)} className="p-2 bg-white rounded-full text-blue-600"><Settings size={18} /></button>
                                                <button onClick={() => { if (confirm('Delete?')) deleteProject(project.id) }} className="p-2 bg-white rounded-full text-red-600"><Trash2 size={18} /></button>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-bold text-gray-900 truncate">{project.title}</h4>
                                            <p className="text-sm text-gray-500">{project.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'leadership' && renderLeadership()}
                {activeTab === 'connect' && renderConnect()}
                {activeTab === 'about' && renderAboutUs()}
                {activeTab === 'settings' && <PasswordSettings />}


                {activeTab === 'journey' && renderListEditor(
                    'Journey Milestones',
                    content.journey,
                    (newItems) => updateSection('journey', newItems),
                    (item, index) => (
                        <div className="flex gap-4 items-start">
                            <img src={item.image} className="w-24 h-24 object-cover rounded" />
                            <div className="flex-1 grid gap-2">
                                <input className="border p-1 rounded" value={item.year} onChange={e => {
                                    const newItems = [...content.journey];
                                    newItems[index].year = e.target.value;
                                    updateSection('journey', newItems);
                                }} placeholder="Year" />
                                <input className="border p-1 rounded font-bold" value={item.title} onChange={e => {
                                    const newItems = [...content.journey];
                                    newItems[index].title = e.target.value;
                                    updateSection('journey', newItems);
                                }} placeholder="Title" />
                                <textarea className="border p-1 rounded" value={item.description} onChange={e => {
                                    const newItems = [...content.journey];
                                    newItems[index].description = e.target.value;
                                    updateSection('journey', newItems);
                                }} placeholder="Description" />
                                <ImageUpload label="Image" value={item.image} onChange={val => {
                                    const newItems = [...content.journey];
                                    newItems[index].image = val;
                                    updateSection('journey', newItems);
                                }} />
                            </div>
                        </div>
                    ),
                    () => ({ id: '', year: '', title: '', description: '', image: '' })
                )}

                {activeTab === 'brochures' && renderListEditor(
                    'Brochures',
                    content.brochures,
                    (newItems) => updateSection('brochures', newItems),
                    (item, index) => (
                        <div className="flex gap-4 items-center">
                            <img src={item.thumbnail} className="w-16 h-20 object-cover rounded border" />
                            <div className="flex-1 grid gap-2">
                                <input className="border p-1 rounded font-bold w-full" value={item.title} onChange={e => {
                                    const newItems = [...content.brochures];
                                    newItems[index].title = e.target.value;
                                    updateSection('brochures', newItems);
                                }} placeholder="Brochure Title" />
                                <ImageUpload label="Thumbnail" value={item.thumbnail} onChange={val => {
                                    const newItems = [...content.brochures];
                                    newItems[index].thumbnail = val;
                                    updateSection('brochures', newItems);
                                }} />
                                {/* For PDF, typically we'd upload a file similarly, but for now placeholder */}
                                <input className="border p-1 rounded w-full text-sm" value={item.pdfUrl} onChange={e => {
                                    const newItems = [...content.brochures];
                                    newItems[index].pdfUrl = e.target.value;
                                    updateSection('brochures', newItems);
                                }} placeholder="PDF URL (or upload feature future)" />
                            </div>
                        </div>
                    ),
                    () => ({ id: '', title: '', pdfUrl: '', thumbnail: '' })
                )}

                {activeTab === 'news' && renderListEditor(
                    'News & Updates',
                    content.news,
                    (newItems) => updateSection('news', newItems),
                    (item, index) => (
                        <div className="flex gap-4 items-start">
                            <img src={item.image} className="w-24 h-24 object-cover rounded" />
                            <div className="flex-1 grid gap-2">
                                <input className="border p-1 rounded font-bold" value={item.title} onChange={e => {
                                    const newItems = [...content.news];
                                    newItems[index].title = e.target.value;
                                    updateSection('news', newItems);
                                }} placeholder="Headline" />
                                <input className="border p-1 rounded text-sm text-gray-500" value={item.date} onChange={e => {
                                    const newItems = [...content.news];
                                    newItems[index].date = e.target.value;
                                    updateSection('news', newItems);
                                }} placeholder="Date" />
                                <textarea className="border p-1 rounded" value={item.excerpt} onChange={e => {
                                    const newItems = [...content.news];
                                    newItems[index].excerpt = e.target.value;
                                    updateSection('news', newItems);
                                }} placeholder="Summary" />
                                <ImageUpload label="Cover Image" value={item.image} onChange={val => {
                                    const newItems = [...content.news];
                                    newItems[index].image = val;
                                    updateSection('news', newItems);
                                }} />
                            </div>
                        </div>
                    ),
                    () => ({ id: '', title: '', date: '', excerpt: '', image: '' })
                )}

            </div>
        </div>
    );
};

const ProtectedDashboard: React.FC = () => {
    return (
        <AuthWrapper>
            <Dashboard />
        </AuthWrapper>
    );
};

export default ProtectedDashboard;
