import React from 'react';

export interface Skill {
    name: string;
    icon: React.ReactNode;
}

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    sourceUrl: string;
    tags: string[];
}

export interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    isPremium?: boolean;
}