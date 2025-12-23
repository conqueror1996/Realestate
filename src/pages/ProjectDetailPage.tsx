import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import EnquiryModal from '../components/EnquiryModal';
import { MapPin, CheckCircle2, Download, Phone, Car, School, ShoppingBag, Plus, Calculator, Settings, Layout, ArrowLeftRight, FileText, Maximize2, Play, ChevronLeft, ChevronRight, Minus, Image, Map } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';
import SEO from '../components/SEO';

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amenitiesIndex, setAmenitiesIndex] = useState(0);
    const [activeLocationIndex, setActiveLocationIndex] = useState<number | null>(0);

    const [bottomFormState, setBottomFormState] = useState({ name: '', email: '', mobile: '' });

    const amenitySlides = [
        { label: "Cricket Nets", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop" },
        { label: "Outdoor Gym", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop" },
        { label: "Walking Track", image: "https://images.unsplash.com/photo-1552674605-469b77542d89?q=80&w=1000&auto=format&fit=crop" },
        { label: "Children's Park", image: "https://images.unsplash.com/photo-1566454825481-4876872a969e?q=80&w=1000&auto=format&fit=crop" },
        { label: "Multipurpose Hall", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop" },
    ];

    const nextAmenity = () => {
        setAmenitiesIndex((prev) => (prev + 1) % amenitySlides.length);
    };

    const prevAmenity = () => {
        setAmenitiesIndex((prev) => (prev - 1 + amenitySlides.length) % amenitySlides.length);
    };




    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const { projects } = useProjects();

    // Find project by ID
    const projectData = projects.find(p => p.id.toString() === id);

    if (!projectData) {
        return <div className="p-20 text-center text-xl">Project not found</div>;
    }

    // Adapt the context data to the component's expected format (specifically icons)
    const project = {
        ...projectData,
        // Ensure arrays exist
        highlights: projectData.highlights || [],
        configurations: projectData.configurations || [],
        amenities: (projectData.amenities || []).map(a => ({
            icon: CheckCircle2,
            label: a.label
        })),
        // Hardcoded Location Data to match the G-Square Screenshot perfectly
        locationAdvantages: [
            {
                title: "School",
                icon: School,
                items: ["St Joseph's Nursery and Primary School", "Narayana E - Techno School", "Sri Mahakrishna Nusery & Primary"]
            },
            {
                title: "Colleges",
                icon: School,
                items: ["Madras Christian College", "Crescent Institute of Science", "Vellore Institute of Technology"]
            },
            {
                title: "IT Parks and Industrial Zones",
                icon: FileText,
                items: ["Shriram The Gateway SEZ", "MEPZ - Special Economic Zone", "Estancia IT Park"]
            },
            {
                title: "Restaurant",
                icon: ShoppingBag,
                items: ["Adyar Ananda Bhavan", "Sangeetha Veg Restaurant", "Faruuzi Multi Cuisine"]
            },
            {
                title: "Transit",
                icon: Car,
                items: ["Vandalur Railway Station", "Proposed Urapakkam Bus Terminus", "Kilambakkam Bus Depot"]
            }
        ],
        images: projectData.galleryImages || [],
        layoutImages: ["https://images.unsplash.com/photo-1599809275372-b7f58af037c2?q=80&w=1000", "https://images.unsplash.com/photo-1524813686514-a5756c97759e?q=80&w=1000"]
    };

    const [galleryTab, setGalleryTab] = useState<'photos' | 'layouts'>('photos');
    const [galleryIndex, setGalleryIndex] = useState(0);

    const activeGalleryImages = galleryTab === 'photos' ? project.images : project.layoutImages;

    const nextGallery = () => {
        setGalleryIndex((prev) => (prev + 1) % activeGalleryImages.length);
    };

    const prevGallery = () => {
        setGalleryIndex((prev) => (prev - 1 + activeGalleryImages.length) % activeGalleryImages.length);
    };



    // ...

    return (
        <div className="font-sans antialiased bg-gray-50 text-gray-800">
            <SEO
                title={project.title}
                description={`Premium plots for sale in ${project.location}. ${project.title} by Future Group offers secured community living with top-tier amenities.`}
                image={project.heroImage}
                type="article"
            />
            <Navbar />

            {/* HERO SECTION - G-Square Style */}
            <div className="relative h-[600px] md:h-[700px] w-full mb-16 px-4">
                {/* Background Image */}
                <div className="absolute inset-x-0 top-0 h-full w-full">
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col justify-center h-full pb-20">
                    <div className="max-w-2xl text-white space-y-6">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#e31e24] px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm shadow-md">
                            <CheckCircle2 size={14} />
                            {project.status}
                        </div>

                        {/* Title & Location */}
                        <div>
                            <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight drop-shadow-lg font-heading">
                                {project.title}
                            </h1>
                            <div className="flex items-center gap-2 text-xl md:text-2xl mt-2 font-light opacity-90">
                                <MapPin className="text-[#e31e24]" size={24} />
                                {project.location}
                            </div>
                        </div>

                        {/* Key USP / RERA */}
                        <div className="pt-4 border-t border-white/20">
                            <p className="text-sm md:text-base font-medium flex items-center gap-2">
                                <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">RERA Approved</span>
                                <span className="opacity-80">{project.reraId}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating Enquiry Form Removed */}

                {/* NEW PROJECT STATS BAR (Matches Screenshot) */}
                <div className="absolute -bottom-16 left-0 right-0 z-30 px-4 md:px-6">
                    <div className="max-w-[1400px] mx-auto bg-[#1A71B7] rounded-xl shadow-xl text-white py-6 px-4 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative">

                        <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-blue-400/30 last:border-0 md:last:border-r-0">
                            <Settings size={28} className="mb-1 opacity-90" />
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wide opacity-90">Configurations</div>
                            <div className="font-semibold text-sm md:text-base">Plots</div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-blue-400/30 last:border-0 md:last:border-r-0">
                            <Layout size={28} className="mb-1 opacity-90" />
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wide opacity-90">Project Area</div>
                            <div className="font-semibold text-sm md:text-base">{project.totalArea || '10 Acres'}</div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-blue-400/30 last:border-0 md:last:border-r-0">
                            <ArrowLeftRight size={28} className="mb-1 opacity-90" />
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wide opacity-90">Total Units</div>
                            <div className="font-semibold text-sm md:text-base">{project.totalUnits || '150 Units'}</div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-blue-400/30 last:border-0 md:last:border-r-0">
                            <FileText size={28} className="mb-1 opacity-90" />
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wide opacity-90">RERA ID</div>
                            <div className="font-semibold text-xs md:text-sm underline decoration-blue-300 underline-offset-4 cursor-pointer hover:text-blue-100">{project.reraId}</div>
                        </div>

                        <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center text-center gap-2">
                            <Maximize2 size={28} className="mb-1 opacity-90" />
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wide opacity-90">Available Size</div>
                            <div className="font-semibold text-sm md:text-base">{project.configurations[0]?.size || '600 Sq.ft'} Onwards</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* STICKY NAV REMOVED */}

            {/* MAIN CONTENT AREA */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12 mt-8">

                {/* MAIN CONTENT COLUMN - FULL WIDTH */}
                <div className="w-full space-y-16">

                    {/* NEW HIGHLIGHTS SECTION (Matches Screenshot) */}
                    <section id="overview" className="bg-white rounded-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-8 items-center">

                            {/* Left Image */}
                            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden relative group shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                                    alt="Project Highlights"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Right Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-2xl md:text-3xl font-heading font-normal text-gray-900 leading-tight">
                                    <span className="font-bold">{project.title} Highlights</span>
                                </h2>

                                <div className="space-y-4">
                                    {/* Description as first point if needed, or just highlights */}
                                    {/* Description or Default Text */}
                                    {project.description ? (
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-2">
                                            {project.description}
                                        </p>
                                    ) : (
                                        <p className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm md:text-base">
                                            <Play size={12} className="text-[#1A71B7] fill-[#1A71B7] mt-1.5 shrink-0" />
                                            <span>Plots ranging from {project.configurations[0]?.size || '600 Sq.ft'} Onwards spread across {project.totalArea || '10 Acres'}.</span>
                                        </p>
                                    )}

                                    {/* Existing Highlights Map */}
                                    {project.highlights.map((highlight, idx) => (
                                        <p key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm md:text-base">
                                            <Play size={12} className="text-[#1A71B7] fill-[#1A71B7] mt-1.5 shrink-0" />
                                            <span>{highlight}</span>
                                        </p>
                                    ))}

                                    {/* Hardcoded Standard Highlights for visual match */}
                                    <p className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm md:text-base">
                                        <Play size={12} className="text-[#1A71B7] fill-[#1A71B7] mt-1.5 shrink-0" />
                                        <span>Perfect legal documentation.</span>
                                    </p>
                                    <p className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm md:text-base">
                                        <Play size={12} className="text-[#1A71B7] fill-[#1A71B7] mt-1.5 shrink-0" />
                                        <span>Status: {project.status}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CENTERED ENQUIRE BUTTON */}
                    <div className="flex justify-center -mt-8 mb-8">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#1A71B7] text-white px-10 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#155a93] transition-colors shadow-lg rounded-sm"
                        >
                            Enquire now
                        </button>
                    </div>

                    {/* INLINE ENQUIRY FORM */}


                    {/* PRICE & CONFIGURATION */}
                    <section id="price" className="scroll-mt-40 bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-2 uppercase tracking-wide">
                            Price Table
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Base Price: <span className="font-bold text-[#1A71B7]">{project.configurations[0]?.price || 'Ask for Price'}</span> Onwards*
                        </p>

                        {/* Custom Table Design */}
                        <div className="w-full mb-10">
                            {/* Header Bar */}
                            <div className="bg-[#1A71B7] text-white py-3 px-6 rounded-full flex justify-between items-center text-sm md:text-base font-bold uppercase tracking-wide mb-4 shadow-md">
                                <div className="w-1/3 text-center">Type</div>
                                <div className="w-1/3 text-center border-l border-blue-400/50">Plot Size</div>
                                <div className="w-1/3 text-center border-l border-blue-400/50">Rate</div>
                            </div>

                            {/* Table Rows */}
                            <div className="space-y-4">
                                {project.configurations.map((config, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 px-6 text-gray-800 border-b border-dashed border-gray-200 hover:bg-gray-50 transition-colors">
                                        <div className="w-1/3 text-center font-bold text-[#1C1C1C]">{config.type}</div>
                                        <div className="w-1/3 text-center font-medium border-l border-gray-300 h-6 flex items-center justify-center">
                                            {config.size} Onwards
                                        </div>
                                        <div className="w-1/3 text-center font-bold text-[#1C1C1C] border-l border-gray-300 h-6 flex items-center justify-center">
                                            {config.price} Onwards
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#1A71B7] text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wide hover:bg-[#155a93] transition-colors shadow-lg flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                                <Calculator size={18} />
                                Cost Calculator
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#1A71B7] text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wide hover:bg-[#155a93] transition-colors shadow-lg flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                                <Download size={18} />
                                Download Brochure
                            </button>
                        </div>
                    </section>

                    {/* AMENITIES SECTION - 3D Carousel */}
                    <section id="amenities" className="scroll-mt-40 bg-white py-12 rounded-xl shadow-sm border border-gray-100 text-center overflow-hidden">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-12 border-b border-gray-100 pb-4 inline-block">
                            Amenities
                        </h2>

                        <div className="relative h-[400px] w-full flex items-center justify-center max-w-5xl mx-auto perspective-1000">

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevAmenity}
                                className="absolute left-4 md:left-10 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white text-[#1A71B7] transition-all hover:scale-110"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={nextAmenity}
                                className="absolute right-4 md:right-10 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white text-[#1A71B7] transition-all hover:scale-110"
                            >
                                <ChevronRight size={32} />
                            </button>

                            {/* Slides - Map over ALL slides to allow smooth transitions */}
                            {amenitySlides.map((slide, idx) => {
                                // Calculate offset ensuring shortest path wrap-around
                                let offset = (idx - amenitiesIndex);
                                if (offset > 2) offset -= 5;
                                if (offset < -2) offset += 5;

                                // Determine styles based on offset
                                let slideStyle = "";
                                let zIndex = 0;

                                if (offset === 0) {
                                    // Center
                                    slideStyle = "z-30 scale-100 translate-x-0 opacity-100 shadow-2xl";
                                    zIndex = 30;
                                } else if (offset === 1 || offset === -1) {
                                    // Near Left/Right
                                    slideStyle = `z-20 scale-75 opacity-70 cursor-pointer hover:opacity-100 transition-opacity ${offset === -1 ? '-translate-x-[60%]' : 'translate-x-[60%]'}`;
                                    zIndex = 20;
                                } else {
                                    // Far Left/Right (Hidden/Background)
                                    slideStyle = `z-10 scale-50 opacity-40 ${offset < 0 ? '-translate-x-[120%]' : 'translate-x-[120%]'} blur-[2px] pointer-events-none`;
                                    zIndex = 10;
                                }

                                return (
                                    <div
                                        key={idx} // Stable key is crucial for animation
                                        onClick={() => {
                                            if (offset !== 0) {
                                                // Calculate new index based on clicked offset
                                                const newIndex = (amenitiesIndex + offset + amenitySlides.length) % amenitySlides.length;
                                                setAmenitiesIndex(newIndex);
                                            }
                                        }}
                                        className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform w-[300px] md:w-[450px] aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 ${slideStyle}`}
                                        style={{ zIndex }}
                                    >
                                        <div className="relative w-full h-full">
                                            <img
                                                src={slide.image}
                                                alt={slide.label}
                                                className="w-full h-full object-cover"
                                            />
                                            {offset === 0 && ( // Only show label for active slide
                                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 animate-fade-in">
                                                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">{slide.label}</h3>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-3 mt-8">
                            {amenitySlides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setAmenitiesIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === amenitiesIndex ? 'w-8 bg-[#1A71B7]' : 'w-2 bg-gray-300 hover:bg-[#1A71B7]/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </section>

                    {/* LOCATION - MAP & ACCORDION */}
                    <section id="location" className="scroll-mt-40 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">

                        {/* Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-3">
                                Life Around {project.title}
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                The <span className="font-bold">G Square projects</span> are Secured community projects that are strategically located for ease of access to nearby hospitals, bus stands, hotels. The ideal location makes it an ideal investment in your dream home.
                            </p>
                        </div>

                        {/* Unified Map & Accordion Container */}
                        <div className="border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row h-[600px] bg-white">

                            {/* LEFT: MAP (65%) */}
                            <div className="w-full lg:w-[65%] h-full relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.13636735626!2d72.88093836859573!3d19.07590559799438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703058864706!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                                {/* Floating Map Controls (Visual Only) */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <button className="bg-white p-2 rounded shadow text-[#1A71B7] hover:bg-gray-50"><Phone size={20} /></button>
                                    <button className="bg-[#1A71B7] p-2 rounded shadow text-white hover:bg-[#155a93]"><MapPin size={20} /></button>
                                </div>
                            </div>

                            {/* RIGHT: ACCORDION (35%) */}
                            <div className="w-full lg:w-[35%] h-full overflow-y-auto bg-gray-50/50">
                                {project.locationAdvantages.map((adv, idx) => (
                                    <div key={idx} className="border-b border-gray-200 last:border-0">

                                        {/* Accordion Header */}
                                        <button
                                            onClick={() => setActiveLocationIndex(activeLocationIndex === idx ? null : idx)}
                                            className={`w-full flex items-center justify-between p-6 text-left transition-all ${activeLocationIndex === idx ? 'bg-white shadow-sm' : 'hover:bg-gray-100'}`}
                                        >
                                            <span className="font-bold text-[#1C1C1C] uppercase tracking-wider text-sm">{adv.title}</span>
                                            {activeLocationIndex === idx ? (
                                                <Minus size={20} className="text-[#1A71B7]" />
                                            ) : (
                                                <Plus size={20} className="text-gray-400" />
                                            )}
                                        </button>

                                        {/* Accordion Content */}
                                        <div
                                            className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${activeLocationIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="px-6 pb-6 pt-2 space-y-3">
                                                {adv.items.map((item, i) => (
                                                    <div key={i} className="flex justify-between items-center text-sm group cursor-default">
                                                        <span className="text-gray-600 font-medium group-hover:text-[#1A71B7] transition-colors">{item}</span>
                                                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-[#1A71B7]">5 Mins</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>

                    {/* GALLERY */}
                    {/* GALLERY */}
                    <section id="gallery" className="scroll-mt-40 bg-white py-12 text-center rounded-xl shadow-sm border border-gray-100">

                        {/* Toggles */}
                        <div className="flex justify-center gap-4 mb-8">
                            <button
                                onClick={() => { setGalleryTab('photos'); setGalleryIndex(0); }}
                                className={`px-6 py-3 rounded flex items-center gap-2 font-bold uppercase text-sm tracking-wide transition-all ${galleryTab === 'photos' ? 'bg-[#1C1C1C] text-white shadow-lg scale-105' : 'bg-gray-500 text-white/90 hover:bg-gray-600'}`}
                            >
                                <Image size={18} /> Site Photos
                            </button>
                            <button
                                onClick={() => { setGalleryTab('layouts'); setGalleryIndex(0); }}
                                className={`px-6 py-3 rounded flex items-center gap-2 font-bold uppercase text-sm tracking-wide transition-all ${galleryTab === 'layouts' ? 'bg-[#1C1C1C] text-white shadow-lg scale-105' : 'bg-gray-500 text-white/90 hover:bg-gray-600'}`}
                            >
                                <Map size={18} /> Layouts
                            </button>
                        </div>

                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-10 uppercase tracking-widest">Gallery</h2>

                        <div className="relative max-w-6xl mx-auto px-4 md:px-16 group">
                            {/* Nav Buttons */}
                            <button
                                onClick={prevGallery}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white text-[#1A71B7] transition-all hover:scale-110 opacity-100 md:opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={nextGallery}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white text-[#1A71B7] transition-all hover:scale-110 opacity-100 md:opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight size={32} />
                            </button>

                            {/* Slides */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[0, 1, 2].map((offset) => {
                                    const len = activeGalleryImages.length;
                                    if (len === 0) return <div key={offset} className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400">No Image</div>;

                                    const idx = (galleryIndex + offset) % len;
                                    const src = activeGalleryImages[idx];

                                    return (
                                        <div key={`${galleryTab}-${idx}`} className="aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-pointer group/img relative">
                                            <img src={src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* RERA QR CODE SECTION */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center gap-3">
                            <div className="bg-white p-2 border border-gray-200 shadow-inner">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=TNRERA/29/LO/3102/2025"
                                    alt="RERA QR Code"
                                    className="w-20 h-20"
                                />
                            </div>
                            <p className="font-bold text-sm text-[#1C1C1C]">Scan for Project RERA QR</p>
                        </div>
                        <div className="bg-[#1A71B7] text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm shadow-md">
                            RERA ID : <span className="underline decoration-blue-300 underline-offset-4">TNRERA/29/LO/3102/2025</span>
                        </div>
                    </div>

                    {/* WHY CHOOSE SECTION */}
                    <section className="bg-[#1A71B7] rounded-xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden group">
                        {/* Decorative Background Element */}
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>

                        <h2 className="text-white text-2xl md:text-3xl font-heading font-bold uppercase mb-8 border-b border-white/20 pb-4 relative z-10">
                            WHY SHOULD YOU CHOOSE {project.title}?
                        </h2>
                        <div className="space-y-8 relative z-10">
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">Proximity to public transportation areas and workplaces:</h3>
                                <p className="text-white leading-relaxed text-sm">The location of {project.title} is close to public transport areas, entertainment avenues, and educational institutes.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">Secured Community, Secure Life:</h3>
                                <p className="text-white leading-relaxed text-sm">With 24/7 CCTV surveillance and state-of-the-art infrastructure, your family will start their chapter rest assured with a top-tier quality of living. This land for sale in {project.location} was made to create a living that is an upgrade in all aspects.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">State-of-the-art Infrastructure:</h3>
                                <p className="text-white leading-relaxed text-sm">Find features like blacktop roads and LED street lights. There is also the availability of internal roads, street lights, and 24x7 CCTV security. Design your dream house your way with the help of expert guidance that comes as a part of added services when you associate yourself with G Square.</p>
                            </div>
                        </div>
                    </section>

                    {/* BOTTOM ENQUIRY FORM */}
                    <div className="mt-12 bg-gray-50 p-6 md:p-10 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-center text-[#1C1C1C] mb-8 uppercase tracking-wide">
                            Enquire Now
                        </h3>
                        <form className="grid grid-cols-1 md:grid-cols-4 gap-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#1A71B7] focus:ring-1 focus:ring-[#1A71B7] outline-none"
                                value={bottomFormState.name}
                                onChange={(e) => setBottomFormState({ ...bottomFormState, name: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#1A71B7] focus:ring-1 focus:ring-[#1A71B7] outline-none"
                                value={bottomFormState.email}
                                onChange={(e) => setBottomFormState({ ...bottomFormState, email: e.target.value })}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Mobile (+91)"
                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#1A71B7] focus:ring-1 focus:ring-[#1A71B7] outline-none"
                                value={bottomFormState.mobile}
                                onChange={(e) => setBottomFormState({ ...bottomFormState, mobile: e.target.value })}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#1A71B7] text-white font-bold uppercase tracking-wider py-3 rounded hover:bg-[#155a93] transition-colors shadow-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>

                {/* RIGHT SIDEBAR REMOVED */}

            </div>

            <Footer />
            <FloatingButtons onOpenEnquiry={() => setIsModalOpen(true)} />
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ProjectDetailPage;
