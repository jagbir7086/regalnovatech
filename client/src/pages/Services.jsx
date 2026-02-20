const Services = () => {
    const services = [
        {
            title: "Custom Software Development",
            description: "Scalable, secure, and robust applications tailored to your specific business needs. We use the latest technologies to ensure performance and longevity.",
            icon: "💻"
        },
        {
            title: "Cloud Infrastructure & DevOps",
            description: "Future-proof your business with our cloud migration and management services. We optimize for AWS, Azure, and Google Cloud.",
            icon: "☁️"
        },
        {
            title: "Data Analytics & AI",
            description: "Unlock the power of your data with our advanced analytics and machine learning solutions. Turn insights into action.",
            icon: "🤖"
        },
        {
            title: "Cybersecurity Consulting",
            description: "Protect your digital assets with our comprehensive security audits and implementation strategies.",
            icon: "🔒"
        },
        {
            title: "Mobile App Development",
            description: "Engage your customers on the go with intuitive, high-performance mobile applications for iOS and Android.",
            icon: "📱"
        },
        {
            title: "UI/UX Design",
            description: "We create user-centric designs that delight customers and drive engagement, ensuring a seamless digital experience.",
            icon: "🎨"
        }
    ];

    return (
        <div className="services-page">
            <div className="hero" style={{ minHeight: '50vh', background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)' }}>
                <div className="container text-center animate-fade-in">
                    <span className="section-label">End-to-End Solutions</span>
                    <h1>Our Expertise</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Comprehensive digital solutions designed to accelerate growth and innovation.
                    </p>
                </div>
            </div>

            <section className="section services-section">
                <div className="container">
                    <div className="services-grid animate-slide-up">
                        {services.map((service, index) => (
                            <div className="service-card glass-panel" key={index} style={{ textAlign: 'left' }}>
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
