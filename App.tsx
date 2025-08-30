import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import SectionTitle from './components/SectionTitle';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isExiting, setIsExiting] = useState(false);
    const ANIMATION_DURATION = 500; // ms, should match CSS transition

    useEffect(() => {
        const baseTitle = "Rishabh Singh - Full Stack Developer";
        if (activeSection) {
            const sectionTitle = getSectionTitle();
            document.title = `${sectionTitle} | Rishabh Singh`;
        } else {
            document.title = baseTitle;
        }
    }, [activeSection]);

    const handleSectionSelect = (section: string) => {
        setIsExiting(true);
        setTimeout(() => {
            setActiveSection(section);
            setIsExiting(false); // Reset for when HomePage is shown again
        }, ANIMATION_DURATION);
    };

    const handleGoBack = () => {
        setActiveSection(null);
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'about':
                return <About />;
            case 'services':
                return <Services />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            default:
                return null;
        }
    };

    const getSectionTitle = (): string => {
        if (!activeSection) return '';
        if (activeSection === 'portfolio') return 'My Portfolio';
        return activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
    }

    if (activeSection) {
        return (
            <div className="relative min-h-screen bg-brand-bg text-brand-text-primary p-8 md:p-12 animate-fade-in">
                <button 
                    onClick={handleGoBack} 
                    className="fixed top-8 left-8 flex items-center gap-2 text-brand-text-secondary hover:text-brand-primary transition-colors z-10"
                    aria-label="Go back to home page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
                    Back
                </button>
                <SectionTitle title={getSectionTitle()} />
                <div className="container mx-auto">
                    {renderSection()}
                </div>
            </div>
        );
    }

    return <HomePage setActiveSection={handleSectionSelect} isExiting={isExiting} />;
};

export default App;