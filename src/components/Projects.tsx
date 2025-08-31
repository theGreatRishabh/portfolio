
import React from 'react';
import { PROJECTS } from '../constants';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24">
            <SectionTitle title="My Projects" />
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
