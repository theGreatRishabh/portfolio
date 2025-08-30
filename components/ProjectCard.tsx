
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-brand-surface rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-brand-primary/30 hover:transform hover:-translate-y-2 group">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-text-primary">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs font-semibold bg-brand-secondary text-brand-primary py-1 px-3 rounded-full">{tag}</span>
                    ))}
                </div>
                <p className="text-brand-text-secondary mb-4">{project.description}</p>
                <div className="flex space-x-4">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300">
                        View Project
                    </a>
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-secondary text-brand-text-primary py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300">
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
