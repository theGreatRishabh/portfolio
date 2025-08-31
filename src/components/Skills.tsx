
import React from 'react';
import { SKILLS } from '../constants';
import SectionTitle from './SectionTitle';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="bg-brand-secondary p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-4 transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/20">
        {skill.icon}
        <span className="font-medium text-brand-text-primary">{skill.name}</span>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
            <SectionTitle title="My Skills" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {SKILLS.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
