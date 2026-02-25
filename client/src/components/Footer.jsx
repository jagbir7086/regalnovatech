import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div style={{ flex: '1 1 300px' }}>
                        <div className="logo-container" style={{ marginBottom: '1.5rem' }}>
                            <img src="/logo.png" alt="RegalNovaTech Logo" style={{ height: '32px', width: 'auto', marginRight: '10px' }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: '700', fontSize: '1.25rem' }}>
                                <span style={{ color: 'var(--primary)' }}>RegalNova</span>
                                <span style={{ color: 'var(--gold)' }}>Tech</span>
                            </div>
                        </div>
                        <p style={{ maxWidth: '300px', fontSize: '0.9rem' }}>
                            Empowering the next generation of enterprises with cutting-edge software solutions and strategic innovation.
                        </p>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                            <strong>Address:</strong><br />
                            Kanta Toli, Ranchi, Jharkhand<br />
                            <strong>Email:</strong> contact@regalnovatech.com<br />
                            <strong>Phone:</strong> +91 XXXXX XXXXX
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-grid" style={{ flex: '2 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                        <div className="footer-col">
                            <h4>Company</h4>
                            <Link to="/about">About Us</Link>
                            <Link to="/team">Our Team</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/news">News</Link>
                            <Link to="/admin" style={{ color: 'var(--primary)', marginTop: '0.5rem', display: 'block' }}>Admin Dashboard</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Services</h4>
                            <Link to="/services">Cloud Solutions</Link>
                            <Link to="/services">AI & ML</Link>
                            <Link to="/services">Cybersecurity</Link>
                            <Link to="/services">Software Dev</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Support</h4>
                            <Link to="/contact">Contact</Link>
                            <Link to="/faq">FAQs</Link>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} RegalNovaTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
