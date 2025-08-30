
import React, { useState, useEffect, useCallback } from 'react';

const roles = ["A Full Stack Developer", "A Problem Solver", "A Tech Enthusiast"];

const useTypingEffect = (words: string[], typeSpeed = 100, deleteSpeed = 50, delay = 2000) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const handleTyping = useCallback(() => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            setText(currentWord.substring(0, charIndex - 1));
            setCharIndex(prev => prev - 1);
        } else {
            setText(currentWord.substring(0, charIndex + 1));
            setCharIndex(prev => prev + 1);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }
    }, [words, wordIndex, charIndex, isDeleting, delay]);

    useEffect(() => {
        const typingTimeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(typingTimeout);
    }, [handleTyping, text, isDeleting, typeSpeed, deleteSpeed]);

    return text;
};

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300">
        {children}
    </a>
);

const Hero: React.FC = () => {
    const typedText = useTypingEffect(roles);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">
                    I'm <span className="text-brand-primary">Rishabh Singh</span>
                </h1>
                <p className="text-2xl md:text-4xl font-light text-brand-text-secondary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {typedText}
                    <span className="animate-ping">|</span>
                </p>
                <div className="flex justify-center space-x-6 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <SocialIcon href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </SocialIcon>
                    <SocialIcon href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </SocialIcon>
                     <SocialIcon href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </SocialIcon>
                </div>
            </div>
        </section>
    );
};

export default Hero;
