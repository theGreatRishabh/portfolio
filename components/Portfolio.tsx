import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 py-12">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default Portfolio;