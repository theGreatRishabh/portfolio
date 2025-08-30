import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const cardClasses = `
        bg-brand-surface p-6 rounded-lg text-center space-y-4 transition-all duration-300 
        hover:transform hover:-translate-y-2
        ${service.isPremium 
            ? 'border-2 border-brand-primary shadow-2xl shadow-brand-primary/30 relative' 
            : 'hover:shadow-xl hover:shadow-brand-primary/20'
        }
    `;

    return (
        <div className={cardClasses.trim()}>
            {service.isPremium && (
                <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg rounded-tr-lg">
                    Premium
                </div>
            )}
            <div className="flex justify-center mb-4 pt-4">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-text-primary">{service.title}</h3>
            <p className="text-brand-text-secondary">{service.description}</p>
        </div>
    );
};

const Services: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {SERVICES.map((service) => (
                <ServiceCard key={service.title} service={service} />
            ))}
        </div>
    );
};

export default Services;