import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo-container">
                    <img src="/logo.png" alt="RegalNovaTech Logo" style={{ height: '40px', width: 'auto' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: '700', fontSize: '1.25rem' }}>
                        <span style={{ color: 'var(--primary)' }}>RegalNova</span>
                        <span style={{ color: 'var(--gold)' }}>Tech</span>
                    </div>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" style={{ color: 'var(--gold)' }}>Dashboard</Link>
                            {user?.role === 'admin' && <Link to="/admin" style={{ color: 'var(--accent)' }}>Admin Panel</Link>}
                            <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
