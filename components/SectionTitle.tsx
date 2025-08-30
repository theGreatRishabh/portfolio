
import React from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary">{title}</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>
    );
};

export default SectionTitle;
