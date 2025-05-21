import { useEffect } from 'react';

const useMetaTags = (metaData) => {
    useEffect(() => {
        if (!metaData) return;

        // Helper function to create/update meta tags dynamically
        const setMetaTag = (key, value, isProperty) => {
            let metaTag = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${key}"]`);

            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute(isProperty ? 'property' : 'name', key);
                document.head.appendChild(metaTag);
            }

            metaTag.setAttribute('content', value);
        };

        // Loop through metaData and apply correct attributes
        Object.entries(metaData).forEach(([key, value]) => {
            setMetaTag(key, value, key.startsWith('og:') || key.startsWith('twitter:'));
        });
    }, [metaData]);
};

export default useMetaTags;
