import React, { createContext, useContext, useState, type ReactNode } from 'react';

// Define the Project Interface matching all our needs
export interface ProjectConfiguration {
    type: string;
    size: string;
    price: string;
}

export interface Amenity {
    label: string;
    iconName?: string; // Storing icon name as string to simplify JSON serialization needs
}

export interface LocationAdvantage {
    title: string;
    items: string[];
    iconName?: string;
}

export interface Project {
    id: number | string;
    title: string;
    location: string;
    city: string; // 'mumbai' | 'navi_mumbai' | 'mumbai_3.0' | 'chennai' etc
    image: string; // Helper for main card image
    heroImage: string;
    status: string;
    price: string;
    size: string;
    type: string;
    totalArea?: string;
    totalUnits?: string;
    idealFor?: string;
    description?: string;
    reraId?: string;
    highlights?: string[];
    configurations?: ProjectConfiguration[];
    amenities?: Amenity[];
    locationAdvantages?: LocationAdvantage[];
    galleryImages?: string[];
}

// Initial Mock Data
const INITIAL_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Northern Crown',
        location: 'Puzhal, Chennai',
        city: 'chennai',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&h=800&fit=crop',
        status: 'RERA Approved',
        price: '₹45L Onwards',
        size: '600 - 2400 Sq.ft',
        type: 'Premium Villa Plots',
        idealFor: 'Living',
        description: "Experience the royal life at Northern Crown. Located in the rapidly expanding corridor of Puzhal, this project offers the perfect blend of connectivity and serenity. With 100+ amenities and world-class infrastructure, it is the ideal place to build your dream home.",
        reraId: "TN/02/Layout/0123/2024",
        totalArea: "10 Acres",
        totalUnits: "500+",
        highlights: [
            "2 Minutes from Puzhal Junction",
            "500+ Premium Villa Plots",
            "24x7 CCTV Surveillance",
            "Blacktop Roads & Street Lights",
            "5 Years Free Maintenance"
        ],
        configurations: [
            { type: "Villa Plot", size: "600 Sq.ft", price: "₹45 Lakhs" },
            { type: "Villa Plot", size: "1200 Sq.ft", price: "₹90 Lakhs" },
            { type: "Villa Plot", size: "2400 Sq.ft", price: "₹1.80 Cr" },
        ],
        amenities: [
            { label: "Gated Community" },
            { label: "Kids Play Area" },
            { label: "Landscaped Gardens" },
            { label: "Jogging Track" }
        ],
        locationAdvantages: [
            { title: "Schools", items: ["Velammal Global School (5 min)", "Don Bosco (10 min)"] },
            { title: "Hospitals", items: ["Apollo Hospitals (15 min)", "Kauvery Hospital (12 min)"] }
        ],
        galleryImages: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 2,
        title: 'Medavakkam Royal',
        location: 'Mumbai 3.0',
        city: 'mumbai_3.0',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=800&fit=crop',
        status: 'Ready to Build',
        price: '₹85L - ₹2.5Cr',
        size: '1200 - 4800 Sq.ft',
        type: 'Premium Plots',
        idealFor: 'Investment',
        description: 'A premium plotted development in the heart of the city.',
        highlights: ['Prime Location', 'Close to Metro', 'High Appreciation Potential'],
        configurations: [],
        amenities: [],
        locationAdvantages: [],
        galleryImages: []
    },
    {
        id: 3,
        title: 'Blue Breeze',
        location: 'Mumbai',
        city: 'mumbai',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1600&h=800&fit=crop',
        status: 'CMDA Approved',
        price: '₹2.5Cr Onwards',
        size: '2400 - 9600 Sq.ft',
        type: 'Beachside Land',
        idealFor: 'Luxury',
        description: 'Luxury beachside plots.',
        configurations: [],
        amenities: [],
        locationAdvantages: [],
        galleryImages: []
    },
    {
        id: 4,
        title: 'Green Valley',
        location: 'Navi Mumbai',
        city: 'navi_mumbai',
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&h=800&fit=crop',
        status: 'New Launch',
        price: '₹55L Onwards',
        size: '1000 - 3000 Sq.ft',
        type: 'Eco Plots',
        idealFor: 'Nature Lovers',
        description: 'Eco-friendly plots amidst nature.',
        configurations: [],
        amenities: [],
        locationAdvantages: [],
        galleryImages: []
    },
    // Adding duplicates for other cities to populate data as per current mocks
    {
        id: 5,
        title: 'Skyline Towers',
        location: 'Mumbai',
        city: 'mumbai',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=800&fit=crop',
        status: 'Under Construction',
        price: '₹1.8Cr Onwards',
        size: '2 BHK / 3 BHK',
        type: 'Apartments',
        idealFor: 'Urban Living',
        description: 'Luxury apartments.',
        configurations: [],
        amenities: [],
        locationAdvantages: [],
        galleryImages: []
    },
    {
        id: 6,
        title: 'Future City',
        location: 'Mumbai 3.0',
        city: 'mumbai_3.0',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&h=800&fit=crop',
        status: 'Pre-Launch',
        price: '₹35L Onwards',
        size: '1500 Sq.ft Avg',
        type: 'Integrated Township',
        idealFor: 'Future Growth',
        description: 'Integrated township.',
        configurations: [],
        amenities: [],
        locationAdvantages: [],
        galleryImages: []
    }
];

interface ProjectContextType {
    projects: Project[];
    addProject: (project: Project) => void;
    updateProject: (id: number | string, project: Partial<Project>) => void;
    deleteProject: (id: number | string) => void;
    getProjectById: (id: number | string) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // In a real app, this initial state might come from an API call
    const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

    const addProject = (project: Project) => {
        setProjects(prev => [...prev, { ...project, id: Date.now() }]);
    };

    const updateProject = (id: number | string, updatedFields: Partial<Project>) => {
        setProjects(prev => prev.map(p => (p.id.toString() === id.toString() ? { ...p, ...updatedFields } : p)));
    };

    const deleteProject = (id: number | string) => {
        setProjects(prev => prev.filter(p => p.id.toString() !== id.toString()));
    };

    const getProjectById = (id: number | string) => {
        return projects.find(p => p.id.toString() === id.toString());
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject, getProjectById }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
};
