import React, { createContext, useContext, useState, type ReactNode } from 'react';

// Journey Section Types
export interface JourneyMilestone {
    id: string | number;
    year: string;
    title: string;
    description: string;
    image: string;
}

// Brochure Section Types
export interface Brochure {
    id: string | number;
    title: string;
    pdfUrl: string; // Base64 or URL
    thumbnail: string;
}

// Leadership Note Types
export interface LeadershipProfile {
    name: string;
    role: string;
    message: string;
    image: string;
    signature?: string;
}

// News & Updates Types
export interface NewsArticle {
    id: string | number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    link?: string;
}

// Connect Section Types
export interface ConnectConfig {
    backgroundImage: string;
    title: string;
    subtitle: string;
}

export interface ValueItem {
    title: string;
    desc: string;
}

export interface AboutUsData {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    storyTitle: string;
    storyDescription: string;
    storyImage: string;
    yearsOfExperience: string;
    stats: {
        projects: string;
        sqft: string;
        families: string;
        clarity: string;
    };
    values: ValueItem[];
    founderMessage: string;
    founderName: string;
}

export interface SiteContent {
    journey: JourneyMilestone[];
    brochures: Brochure[];
    leadership: LeadershipProfile;
    news: NewsArticle[];
    connect: ConnectConfig;
    aboutUs: AboutUsData;
}

// Initial Data (Mocking what is currently hardcoded in components)
const INITIAL_CONTENT: SiteContent = {
    journey: [
        { id: 1, year: '2010', title: 'Inception', description: 'Started our journey with a vision.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop' },
        { id: 2, year: '2015', title: 'Expansion', description: 'Expanded to 5 cities.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop' },
    ],
    brochures: [
        { id: 1, title: 'Corporate Brochure', pdfUrl: '', thumbnail: 'https://images.unsplash.com/photo-1586769852044-699d6d193ae3?w=400&h=300&fit=crop' },
        { id: 2, title: 'Project Catalogue', pdfUrl: '', thumbnail: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=400&h=300&fit=crop' }
    ],
    leadership: {
        name: 'John Doe',
        role: 'Chairman & Managing Director',
        message: 'We believe in building not just homes, but legacies. Our commitment to quality and integrity is unwavering.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        signature: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png'
    },
    news: [
        { id: 1, title: 'Award for Excellence', date: 'Dec 15, 2024', excerpt: 'Future Group wins best developer award.', image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=400&fit=crop' },
        { id: 2, title: 'New Project Launch', date: 'Nov 20, 2024', excerpt: 'Launching Green Valley in Navi Mumbai.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop' }
    ],
    connect: {
        backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        title: 'Let’s Build Your Dream',
        subtitle: 'Get in touch with us for exclusive offers.'
    },
    aboutUs: {
        heroTitle: 'Building Legacies,\nFulfilling Dreams',
        heroSubtitle: "We are India's most trusted real estate partner, dedicated to delivering premium living spaces and high-value land investments.",
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        storyTitle: 'Pioneering the Future of\nReal Estate Development',
        storyDescription: "Established with a vision to redefine the real estate landscape, Future Group has grown to become a symbol of trust and transparency. We specialize in identifying high-growth land corridors and creating villa communities that offer both lifestyle upgrades and exceptional appreciation.\n\nOur journey is defined by a relentless pursuit of quality, adherence to strict legal standards, and a customer-centric approach that puts your peace of mind first.",
        storyImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
        yearsOfExperience: '10+',
        stats: {
            projects: '50+',
            sqft: '20M',
            families: '5K+',
            clarity: '100%'
        },
        values: [
            { title: "Integrity & Transparency", desc: "We believe in complete transparency. Every document, every title, every promise is verified and clear. No hidden clauses, just trust." },
            { title: "Strategic Locations", desc: "We don't just pick land; we pick potential. Our projects are located in high-growth corridors ensuring maximum appreciation for your investment." },
            { title: "Customer Centricity", desc: "You are at the heart of everything we do. From post-sale support to community management, we walk the extra mile for you." }
        ],
        founderMessage: "Our mission is simple: to make land investment accessible, secure, and profitable for every Indian. We are building not just communities, but the foundation for your future wealth.",
        founderName: "Chairman, Future Group"
    }
};

interface ContentContextType {
    content: SiteContent;
    updateSection: <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<SiteContent>(INITIAL_CONTENT);

    const updateSection = <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => {
        setContent(prev => ({ ...prev, [section]: data }));
    };

    return (
        <ContentContext.Provider value={{ content, updateSection }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
