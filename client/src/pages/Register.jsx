import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const { register } = useContext(AuthContext);

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await register(formData);
            alert('Registration Successful');
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert('Registration Failed. Email might be already in use.');
        }
    };

    return (
        <div className="auth-page">
            <form className="auth-form animate-slide-up" onSubmit={onSubmit}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>RegalNovaTech</div>
                    <h2>New Account</h2>
                    <p className="text-muted" style={{ fontSize: '0.9em' }}>Join the future of engineering.</p>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="register-name">Full Name</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. John Doe"
                        name="name"
                        id="register-name"
                        value={name}
                        onChange={onChange}
                        required
                        autoComplete="name"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="register-email">Email Address</label>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        name="email"
                        id="register-email"
                        value={email}
                        onChange={onChange}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="register-password">Password</label>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="Minimum 6 characters"
                        name="password"
                        id="register-password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                        autoComplete="new-password"
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Create Account</button>
            </form>
        </div>
    );
};

export default Register;
