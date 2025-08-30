import React, { useState } from 'react';

// This lets TypeScript know that 'emailjs' is available on the global window object from the CDN script.
declare const emailjs: any;

const ContactInfoItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-4">
        <div className="bg-brand-secondary p-3 rounded-full text-brand-primary">
            {icon}
        </div>
        <span className="text-brand-text-secondary">{text}</span>
    </div>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setSubmissionStatus('sending');

        // --- EmailJS Integration ---
        // 1. Sign up for a free account at https://www.emailjs.com
        // 2. Create an email service and a template.
        // 3. In your EmailJS template, use {{name}}, {{email}}, and {{message}} to access the form data.
        // 4. To get the requested subject line "TGR service | Email | <Name of the sender>",
        //    set the subject in your EmailJS template to: TGR service | Email | {{name}}
        // 5. Replace the placeholder values below with your actual keys.

        const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
        const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
        const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS Public Key

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset the status after a few seconds
                setTimeout(() => setSubmissionStatus('idle'), 4000);
            })
            .catch((error: any) => {
                console.error('EmailJS error:', error);
                setSubmissionStatus('error');
                 // Reset the status after a few seconds
                setTimeout(() => setSubmissionStatus('idle'), 4000);
            });
    };

    return (
        <div className="grid md:grid-cols-2 gap-12 bg-brand-surface p-8 rounded-lg mt-12">
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-text-primary">Contact Information</h3>
                <p className="text-brand-text-secondary">
                    Feel free to reach out to me! I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
                </p>
                <div className="space-y-4">
                    <ContactInfoItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>} text="your.email@example.com" />
                    <ContactInfoItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>} text="+1 234 567 890" />
                    <ContactInfoItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>} text="New York, USA" />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                 <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-brand-secondary p-3 rounded-md border border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                 <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-brand-secondary p-3 rounded-md border border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                 <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full bg-brand-secondary p-3 rounded-md border border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"></textarea>
                 <button 
                    type="submit" 
                    disabled={submissionStatus === 'sending'}
                    className="w-full bg-brand-primary text-white py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300 font-semibold disabled:bg-opacity-50 disabled:cursor-not-allowed"
                 >
                     {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
                 </button>
                 {submissionStatus === 'success' && (
                    <p className="text-green-400 text-center mt-2">
                        Thank you for your message! I'll get back to you soon.
                    </p>
                 )}
                 {submissionStatus === 'error' && (
                    <p className="text-red-400 text-center mt-2">
                        Oops! Something went wrong. Please try again later.
                    </p>
                 )}
            </form>
        </div>
    );
};

export default Contact;