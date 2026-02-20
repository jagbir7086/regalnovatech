const About = () => {
    return (
        <div className="about-page" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <div className="hero" style={{ padding: '8rem 0 5rem', background: 'var(--bg-gradient)', position: 'relative', overflow: 'hidden' }}>
                <div className="container text-center animate-fade-in">
                    <span className="section-label" style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1.5rem' }}>
                        Discover Our Story
                    </span>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                        About <span className="text-gradient">RegalNovaTech</span>
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        We are architects of the digital future, blending strategic vision with engineering excellence to build the infrastructure of tomorrow.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <section className="section" style={{ position: 'relative', zIndex: 1 }}>
                <div className="container animate-slide-up">
                    <div className="glass-panel" style={{ padding: '4rem', borderRadius: 'var(--radius-lg)', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div className="about-text" style={{ flex: '1 1 400px' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                At RegalNovaTech, our mission is to empower enterprises with the technology they need to thrive in a rapidly evolving digital landscape. We don't just build software; we build competitive advantages.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                Founded on the principles of integrity, innovation, and excellence, we have grown into a global IT powerhouse, trusted by industry leaders to deliver mission-critical solutions and orchestrate transformative digital journeys.
                            </p>

                            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.2rem' }}>10+</h4>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Exp</span>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--accent)', fontSize: '2rem', marginBottom: '0.2rem' }}>500+</h4>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects</span>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '0.2rem' }}>98%</h4>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image" style={{ flex: '1 1 400px', position: 'relative' }}>
                            <div style={{ position: 'absolute', inset: '-15px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: 'var(--radius-lg)', filter: 'blur(25px)', opacity: '0.4', zIndex: -1 }}></div>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Our Corporate Office" style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section" style={{ position: 'relative' }}>
                <div className="container animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                        <span className="section-label" style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Our Leadership</span>
                        <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Meet the Visionaries</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                            Driving innovation through strategic expertise, technical mastery, and an unwavering commitment to excellence.
                        </p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        {/* Jagbir - Founder & CEO */}
                        <div className="service-card" style={{ textAlign: 'center', background: 'var(--bg-card)', padding: '3.5rem 2rem' }}>
                            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2.5rem' }}>
                                <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, var(--gold), var(--primary))', borderRadius: '50%', filter: 'blur(15px)', opacity: '0.5' }}></div>
                                <img
                                    src="/jagbir.jpeg"
                                    alt="Jagbir"
                                    style={{
                                        width: '180px',
                                        height: '180px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '4px solid rgba(255,255,255,0.1)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                />
                            </div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '2rem', color: 'var(--text-main)' }}>Jagbir</h3>
                            <p style={{ color: 'var(--gold)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Founder & CEO</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>Senior MERN Stack Developer</p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                                A visionary leader driving the strategic direction of RegalNovaTech. With deep expertise in full-stack architecture, he oversees the development of scalable, high-performance solutions that empower global enterprises.
                            </p>
                        </div>

                        {/* Jageshwar - Co-Founder & CTO */}
                        <div className="service-card" style={{ textAlign: 'center', background: 'var(--bg-card)', padding: '3.5rem 2rem' }}>
                            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2.5rem' }}>
                                <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '50%', filter: 'blur(15px)', opacity: '0.5' }}></div>
                                <img
                                    src="/jageshwar.jpeg"
                                    alt="Jageshwar"
                                    style={{
                                        width: '180px',
                                        height: '180px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '4px solid rgba(255,255,255,0.1)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                />
                            </div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '2rem', color: 'var(--text-main)' }}>Jageshwar</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Co-Founder & CTO</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>Lead MERN Stack Developer</p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                                Spearheading technical innovation and engineering excellence. He specializes in designing robust backend systems and intuitive user interfaces, ensuring every product meets world-class standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
