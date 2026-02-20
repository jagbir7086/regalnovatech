import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1>Welcome, {user?.name}</h1>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {user?.role === 'admin' && (
                            <button onClick={() => navigate('/admin')} className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>Go to Admin Panel</button>
                        )}
                        <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}>Logout</button>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Your User Profile</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        You are currently logged in as a <strong>{user?.role === 'admin' ? 'System Administrator' : 'Standard User'}</strong>.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Name</span>
                            <span style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>{user?.name}</span>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Email</span>
                            <span style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>{user?.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
