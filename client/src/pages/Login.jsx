import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await login(formData);
            alert('Login Successful');
            // Navigates to the appropriate dashboard
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert('Login Failed. Please check your credentials.');
        }
    };

    return (
        <div className="auth-page">
            <form className="auth-form animate-slide-up" onSubmit={onSubmit}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>RegalNovaTech</div>
                    <h2>Access Portal</h2>
                    <p className="text-muted" style={{ fontSize: '0.9em' }}>Authorized Personnel Only</p>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="login-email">Email Address</label>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="Enter your email"
                        name="email"
                        id="login-email"
                        value={email}
                        onChange={onChange}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="login-password">Password</label>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="Enter your password"
                        name="password"
                        id="login-password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Secure Authenticate</button>
            </form>
        </div>
    );
};

export default Login;
