import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const [status, setStatus] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                alert('Thank you for your message. We have received it and will be in touch shortly.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('error');
            console.error(err);
            alert('Failed to send message. Please check your connection.');
        } finally {
            setStatus('');
        }
    };

    return (
        <div className="contact-page">
            <div className="hero" style={{ minHeight: '50vh', background: 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)' }}>
                <div className="container text-center animate-fade-in">
                    <span className="section-label">Connect</span>
                    <h1>Get In Touch</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Let's start a conversation about your digital future.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container animate-slide-up">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                        {/* Contact Info */}
                        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
                            <h2 style={{ marginBottom: '2rem' }}>Contact Information</h2>
                            <p style={{ marginBottom: '2.5rem' }}>
                                Whether you're interested in our services, have a question, or just want to say hello, we'd love to hear from you.
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Headquarters</h4>
                                <p style={{ color: 'var(--text-main)' }}>Kanta Toli</p>
                                <p style={{ color: 'var(--text-muted)' }}>Ranchi, Jharkhand</p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Email</h4>
                                <p style={{ color: 'var(--text-main)' }}>info@regalnovatech.com</p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Phone</h4>
                                <p style={{ color: 'var(--text-main)' }}>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form className="auth-form" onSubmit={onSubmit} style={{ width: '100%', maxWidth: 'none' }}>
                                <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Send a Message</h3>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-name">Name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        name="name"
                                        id="contact-name"
                                        value={name}
                                        onChange={onChange}
                                        required
                                        placeholder="Your Name"
                                        autocomplete="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-email">Email</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        name="email"
                                        id="contact-email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                        placeholder="your@email.com"
                                        autocomplete="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        name="subject"
                                        id="contact-subject"
                                        value={subject}
                                        onChange={onChange}
                                        required
                                        placeholder="Project Inquiry..."
                                        autocomplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-message">Message</label>
                                    <textarea
                                        className="form-input"
                                        rows="5"
                                        name="message"
                                        id="contact-message"
                                        value={message}
                                        onChange={onChange}
                                        required
                                        placeholder="How can we help you?"
                                        autocomplete="off"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
