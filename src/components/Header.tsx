
import React, { useState, useEffect } from 'react';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-surface/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-2xl font-bold text-brand-primary">
                    Rishabh.
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(link); }}
                            className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-brand-surface pb-4">
                    <ul className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(link); }}
                                    className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
