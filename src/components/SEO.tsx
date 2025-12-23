import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = 'real estate, plots in mumbai, villa plots, land investment, g square, future group',
    image = '/future_group_logo_header.png',
    url = window.location.href,
    type = 'website'
}) => {
    const siteTitle = `${title} | Future Group - India's Largest Real Estate Developer`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            {/* Open Graph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* JSON-LD Structured Data for LocalBusiness */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "RealEstateAgent",
                    "name": "Future Group",
                    "image": "https://www.futuregroup.in/future_group_logo_header.png", // Replace with actual domain in prod
                    "description": description,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Mumbai",
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                    },
                    "url": "https://www.futuregroup.in", // Replace with actual domain
                    "telephone": "+91-8939540008"
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
