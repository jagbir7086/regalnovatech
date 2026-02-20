import { Link } from 'react-router-dom';
import { useState } from 'react';

// import founderImage from '../assets/founder.jpg'; 
// const founderImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"; // Placeholder image

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

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

    const services = [
        {
            title: "Enterprise Solutions",
            description: "Scalable software architectures designed for high-performance business operations.",
            icon: "💻"
        },
        {
            title: "Cloud Infrastructure",
            description: "Secure, resilient cloud environments optimized for speed and reliability.",
            icon: "☁️"
        },
        {
            title: "Digital Strategy",
            description: "Actionable roadmaps to navigate the complex digital landscape.",
            icon: "📊"
        },
        {
            title: "AI & Innovation",
            description: "Harnessing machine learning to drive automation and predictive insights.",
            icon: "🤖"
        }
    ];

    const stats = [
        { label: "Projects Delivered", value: "500+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Global Partners", value: "40+" },
        { label: "Tech Experts", value: "120+" }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container animate-fade-in">
                    <span className="section-label">Future of Tech</span>
                    <h1>
                        Empowering Visionaries with <br />
                        <span className="text-gradient">World-Class Engineering</span>
                    </h1>
                    <p>
                        We build the digital infrastructure of tomorrow. From AI-driven insights to scalable cloud ecosystems, RegalNovaTech is your partner in innovation.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/register" className="btn btn-primary">Start Your Journey</Link>
                        <Link to="/about" className="btn btn-outline">Explore Solutions</Link>
                    </div>

                    {/* Stats Bar */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4rem',
                        marginTop: '5rem',
                        flexWrap: 'wrap',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '3rem'
                    }}>
                        {stats.map((stat, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <h4 style={{ fontSize: '2rem', marginBottom: '0.2rem', color: 'white' }}>{stat.value}</h4>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Expertise</span>
                        <h2>Engineering Excellence</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                            We deliver precision-engineered solutions tailored to the unique challenges of modern enterprises.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section id="leadership" className="section" style={{ background: 'var(--bg-gradient)' }}>
                <div className="container animate-slide-up">
                    <div className="section-header">
                        <span className="section-label">Our Leadership</span>
                        <h2>Meet the Visionaries</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Driving innovation through strategic expertise and technical mastery.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>



                        {/* Jagbir - Founder & CEO */}
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                                <img
                                    src="/jagbir.jpeg"
                                    alt="Jagbir"
                                    style={{
                                        width: '180px',
                                        height: '180px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '4px solid var(--gold)',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                    }}
                                />
                            </div>
                            <h3 style={{ marginBottom: '0.2rem', fontSize: '1.8rem' }}>Jagbir</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Founder & CEO</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>Senior MERN Stack Developer</p>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                A visionary leader driving the strategic direction of RegalNovaTech. With deep expertise in full-stack architecture, he oversees the development of scalable, high-performance solutions that empower global enterprises.
                            </p>
                        </div>

                        {/* Jageshwar - Co-Founder & CTO */}
                        <div className="service-card" style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                                <img
                                    src="/jageshwar.jpeg"
                                    alt="Jageshwar"
                                    style={{
                                        width: '180px',
                                        height: '180px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '4px solid var(--gold)',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                    }}
                                />
                            </div>
                            <h3 style={{ marginBottom: '0.2rem', fontSize: '1.8rem' }}>Jageshwar</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Co-Founder & CTO</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>Lead MERN Stack Developer</p>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Spearheading technical innovation and engineering excellence. He specializes in designing robust backend systems and intuitive user interfaces, ensuring every product meets world-class standards.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Get In Touch</span>
                        <h2>Ready to Scale?</h2>
                        <p>Let's discuss how we can accelerate your digital transformation.</p>
                    </div>

                    <div className="auth-form">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="home-name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    name="name"
                                    id="home-name"
                                    value={formData.name}
                                    onChange={onChange}
                                    placeholder="e.g. John Doe"
                                    required
                                    autoComplete="name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="home-email">Email Address</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    name="email"
                                    id="home-email"
                                    value={formData.email}
                                    onChange={onChange}
                                    placeholder="john@company.com"
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="home-subject">Subject</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    name="subject"
                                    id="home-subject"
                                    value={formData.subject}
                                    onChange={onChange}
                                    placeholder="Project Inquiry"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="home-message">Message</label>
                                <textarea
                                    className="form-input"
                                    rows="4"
                                    name="message"
                                    id="home-message"
                                    value={formData.message}
                                    onChange={onChange}
                                    placeholder="Tell us about your project..."
                                    required
                                    autoComplete="off"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
