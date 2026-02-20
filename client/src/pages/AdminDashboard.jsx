import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch messages
        const fetchMessages = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch('http://localhost:5000/api/contact', {
                    headers: {
                        'x-auth-token': token,
                    },
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch messages');
                }
                const data = await res.json();
                setMessages(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching messages:", err);
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1>Admin Dashboard</h1>
                    <button onClick={() => navigate('/')} className="btn btn-outline">Back to Home</button>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
                    <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        Contact Form Submissions
                    </h2>

                    {loading ? (
                        <p>Loading messages...</p>
                    ) : messages.length === 0 ? (
                        <p>No messages received yet.</p>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-main)', minWidth: '600px' }}>
                                <thead>
                                    <tr style={{ background: 'rgba(59, 130, 246, 0.1)', textAlign: 'left' }}>
                                        <th style={{ padding: '1rem' }}>Date</th>
                                        <th style={{ padding: '1rem' }}>Name</th>
                                        <th style={{ padding: '1rem' }}>Email</th>
                                        <th style={{ padding: '1rem' }}>Subject</th>
                                        <th style={{ padding: '1rem' }}>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.map((msg) => (
                                        <tr key={msg._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                                {new Date(msg.date).toLocaleDateString()}
                                            </td>
                                            <td style={{ padding: '1rem', fontWeight: '500' }}>{msg.name}</td>
                                            <td style={{ padding: '1rem', color: 'var(--primary)' }}>{msg.email}</td>
                                            <td style={{ padding: '1rem' }}>{msg.subject}</td>
                                            <td style={{ padding: '1rem', color: 'var(--text-muted)', maxWidth: '300px' }}>
                                                {msg.message}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
