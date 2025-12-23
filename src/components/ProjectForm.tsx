import React, { useState, useEffect } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import type { Project, ProjectConfiguration } from '../context/ProjectContext';
import ImageUpload from './ImageUpload';

interface ProjectFormProps {
    initialData: Partial<Project>;
    onSubmit: (data: Project) => void;
    onCancel: () => void;
    isEditing: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ initialData, onSubmit, onCancel, isEditing }) => {
    const [formData, setFormData] = useState<Partial<Project>>({
        highlights: [],
        configurations: [],
        amenities: [],
        locationAdvantages: [],
        galleryImages: [],
        ...initialData
    });

    useEffect(() => {
        setFormData({
            highlights: [],
            configurations: [],
            amenities: [],
            locationAdvantages: [],
            galleryImages: [],
            ...initialData
        });
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData as Project);
    };

    // --- Array Helpers ---

    const addHighlight = () => {
        setFormData(prev => ({ ...prev, highlights: [...(prev.highlights || []), ''] }));
    };

    const updateHighlight = (index: number, value: string) => {
        const newHighlights = [...(formData.highlights || [])];
        newHighlights[index] = value;
        setFormData({ ...formData, highlights: newHighlights });
    };

    const removeHighlight = (index: number) => {
        setFormData(prev => ({ ...prev, highlights: prev.highlights?.filter((_, i) => i !== index) }));
    };

    const addConfiguration = () => {
        setFormData(prev => ({
            ...prev,
            configurations: [...(prev.configurations || []), { type: '', size: '', price: '' }]
        }));
    };

    const updateConfiguration = (index: number, field: keyof ProjectConfiguration, value: string) => {
        const newConfigs = [...(formData.configurations || [])];
        newConfigs[index] = { ...newConfigs[index], [field]: value };
        setFormData({ ...formData, configurations: newConfigs });
    };

    const removeConfiguration = (index: number) => {
        setFormData(prev => ({ ...prev, configurations: prev.configurations?.filter((_, i) => i !== index) }));
    };

    const addAmenity = () => {
        setFormData(prev => ({
            ...prev,
            amenities: [...(prev.amenities || []), { label: '' }]
        }));
    };

    const updateAmenity = (index: number, value: string) => {
        const newAmenities = [...(formData.amenities || [])];
        newAmenities[index] = { ...newAmenities[index], label: value };
        setFormData({ ...formData, amenities: newAmenities });
    };

    const removeAmenity = (index: number) => {
        setFormData(prev => ({ ...prev, amenities: prev.amenities?.filter((_, i) => i !== index) }));
    };

    const addLocationAdvantage = () => {
        setFormData(prev => ({
            ...prev,
            locationAdvantages: [...(prev.locationAdvantages || []), { title: '', items: [] }]
        }));
    };

    const updateLocationTitle = (index: number, title: string) => {
        const newLocs = [...(formData.locationAdvantages || [])];
        newLocs[index] = { ...newLocs[index], title };
        setFormData({ ...formData, locationAdvantages: newLocs });
    };

    const addLocationItem = (locIndex: number) => {
        const newLocs = [...(formData.locationAdvantages || [])];
        newLocs[locIndex].items = [...newLocs[locIndex].items, ''];
        setFormData({ ...formData, locationAdvantages: newLocs });
    };

    const updateLocationItem = (locIndex: number, itemIndex: number, value: string) => {
        const newLocs = [...(formData.locationAdvantages || [])];
        newLocs[locIndex].items[itemIndex] = value;
        setFormData({ ...formData, locationAdvantages: newLocs });
    };

    const removeLocationItem = (locIndex: number, itemIndex: number) => {
        const newLocs = [...(formData.locationAdvantages || [])];
        newLocs[locIndex].items = newLocs[locIndex].items.filter((_, i) => i !== itemIndex);
        setFormData({ ...formData, locationAdvantages: newLocs });
    };

    const removeLocationAdvantage = (index: number) => {
        setFormData(prev => ({ ...prev, locationAdvantages: prev.locationAdvantages?.filter((_, i) => i !== index) }));
    };

    const addGalleryImage = () => {
        setFormData(prev => ({ ...prev, galleryImages: [...(prev.galleryImages || []), ''] }));
    };

    const updateGalleryImage = (index: number, value: string) => {
        const newImages = [...(formData.galleryImages || [])];
        newImages[index] = value;
        setFormData({ ...formData, galleryImages: newImages });
    };

    const removeGalleryImage = (index: number) => {
        setFormData(prev => ({ ...prev, galleryImages: prev.galleryImages?.filter((_, i) => i !== index) }));
    };


    return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{isEditing ? 'Edit Project' : 'Add New Project'}</h3>
                <button type="button" onClick={onCancel} className="text-gray-500 hover:text-gray-700">
                    <X size={24} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                        <input required type="text" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. Northern Crown" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City Key</label>
                        <select value={formData.city || 'mumbai'} onChange={e => setFormData({ ...formData, city: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none">
                            <option value="mumbai">Mumbai</option>
                            <option value="navi_mumbai">Navi Mumbai</option>
                            <option value="mumbai_3.0">Mumbai 3.0</option>
                            <option value="chennai">Chennai</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price Display</label>
                        <input required type="text" value={formData.price || ''} onChange={e => setFormData({ ...formData, price: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. ₹45L Onwards" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input required type="text" value={formData.location || ''} onChange={e => setFormData({ ...formData, location: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. Puzhal, Chennai" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <input required type="text" value={formData.status || ''} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. New Launch" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">RERA ID</label>
                        <input type="text" value={formData.reraId || ''} onChange={e => setFormData({ ...formData, reraId: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. TN/02/Layout/..." />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                        <input type="text" value={formData.type || ''} onChange={e => setFormData({ ...formData, type: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. Premium Villa Plots" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Size Range</label>
                        <input type="text" value={formData.size || ''} onChange={e => setFormData({ ...formData, size: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. 600 - 2400 Sq.ft" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Total Project Area</label>
                        <input type="text" value={formData.totalArea || ''} onChange={e => setFormData({ ...formData, totalArea: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. 10 Acres" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Total Units</label>
                        <input type="text" value={formData.totalUnits || ''} onChange={e => setFormData({ ...formData, totalUnits: e.target.value })} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" placeholder="e.g. 150 Units" />
                    </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ImageUpload label="Project Card Image" value={formData.image} onChange={val => setFormData({ ...formData, image: val })} />
                    <ImageUpload label="Hero Image (Detail Page)" value={formData.heroImage} onChange={val => setFormData({ ...formData, heroImage: val })} />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1A71B7] outline-none" rows={4} value={formData.description || ''} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                </div>

                {/* Configurations / Price Table */}
                <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-gray-800">Configurations (Price Table)</h4>
                        <button type="button" onClick={addConfiguration} className="text-[#1A71B7] flex items-center gap-1 text-sm font-bold hover:underline"><Plus size={16} /> Add Config</button>
                    </div>
                    <div className="space-y-3">
                        {formData.configurations?.map((config, idx) => (
                            <div key={idx} className="flex gap-4 items-center bg-gray-50 p-3 rounded border border-gray-200">
                                <input placeholder="Type (e.g. Villa Plot)" className="flex-1 p-2 border rounded" value={config.type} onChange={e => updateConfiguration(idx, 'type', e.target.value)} />
                                <input placeholder="Size (e.g. 600 Sq.ft)" className="flex-1 p-2 border rounded" value={config.size} onChange={e => updateConfiguration(idx, 'size', e.target.value)} />
                                <input placeholder="Price (e.g. ₹45 Lakhs)" className="flex-1 p-2 border rounded" value={config.price} onChange={e => updateConfiguration(idx, 'price', e.target.value)} />
                                <button type="button" onClick={() => removeConfiguration(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                            </div>
                        ))}
                        {formData.configurations?.length === 0 && <p className="text-sm text-gray-400 italic">No configurations added.</p>}
                    </div>
                </div>

                {/* Highlights */}
                <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-gray-800">Highlights</h4>
                        <button type="button" onClick={addHighlight} className="text-[#1A71B7] flex items-center gap-1 text-sm font-bold hover:underline"><Plus size={16} /> Add Highlight</button>
                    </div>
                    <div className="space-y-3">
                        {formData.highlights?.map((highlight, idx) => (
                            <div key={idx} className="flex gap-4 items-center">
                                <input placeholder="Highlight text" className="flex-1 p-2 border rounded" value={highlight} onChange={e => updateHighlight(idx, e.target.value)} />
                                <button type="button" onClick={() => removeHighlight(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                            </div>
                        ))}
                        {formData.highlights?.length === 0 && <p className="text-sm text-gray-400 italic">No highlights added.</p>}
                    </div>
                </div>

                {/* Amenities */}
                <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-gray-800">Amenities</h4>
                        <button type="button" onClick={addAmenity} className="text-[#1A71B7] flex items-center gap-1 text-sm font-bold hover:underline"><Plus size={16} /> Add Amenity</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {formData.amenities?.map((amenity, idx) => (
                            <div key={idx} className="flex gap-4 items-center bg-gray-50 p-2 rounded border border-gray-200">
                                <input placeholder="Amenity Label" className="flex-1 p-2 border rounded" value={amenity.label} onChange={e => updateAmenity(idx, e.target.value)} />
                                <button type="button" onClick={() => removeAmenity(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                            </div>
                        ))}
                    </div>
                    {formData.amenities?.length === 0 && <p className="text-sm text-gray-400 italic">No amenities added.</p>}
                </div>

                {/* Location Advantages */}
                <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-gray-800">Location Advantages</h4>
                        <button type="button" onClick={addLocationAdvantage} className="text-[#1A71B7] flex items-center gap-1 text-sm font-bold hover:underline"><Plus size={16} /> Add Category</button>
                    </div>
                    <div className="space-y-4">
                        {formData.locationAdvantages?.map((loc, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded border border-gray-200">
                                <div className="flex gap-4 mb-3">
                                    <input placeholder="Category Title (e.g. Schools)" className="flex-1 p-2 border rounded font-bold" value={loc.title} onChange={e => updateLocationTitle(idx, e.target.value)} />
                                    <button type="button" onClick={() => removeLocationAdvantage(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                                </div>
                                <div className="pl-4 space-y-2 border-l-2 border-gray-300">
                                    {loc.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex gap-2 items-center">
                                            <input placeholder="Location Item" className="flex-1 p-1 border rounded text-sm" value={item} onChange={e => updateLocationItem(idx, itemIdx, e.target.value)} />
                                            <button type="button" onClick={() => removeLocationItem(idx, itemIdx)} className="text-red-400 hover:text-red-600"><X size={16} /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addLocationItem(idx)} className="text-xs text-[#1A71B7] font-bold mt-1 flex items-center gap-1"><Plus size={12} /> Add Item</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-gray-800">Project Gallery</h4>
                        <button type="button" onClick={addGalleryImage} className="text-[#1A71B7] flex items-center gap-1 text-sm font-bold hover:underline"><Plus size={16} /> Add Image</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {formData.galleryImages?.map((img, idx) => (
                            <div key={idx} className="relative group">
                                <ImageUpload label={`Image ${idx + 1}`} value={img} onChange={val => updateGalleryImage(idx, val)} />
                                <button type="button" onClick={() => removeGalleryImage(idx)} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"><Trash2 size={14} /></button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4 border-t pt-8 sticky bottom-0 bg-white p-4 -mx-8 -mb-8 shadow-inner">
                    <button type="button" onClick={onCancel} className="px-6 py-2 border rounded text-gray-600 hover:bg-gray-100">Cancel</button>
                    <button type="submit" className="px-8 py-2 bg-[#1A71B7] text-white rounded font-bold hover:bg-[#155a93]">Save Project</button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
