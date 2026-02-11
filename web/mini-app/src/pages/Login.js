import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';
import { EyeIcon, EyeOffIcon } from '../icons/EyeIcons';

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/profile', { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(formData);
    } catch {
      setErrors({ submit: 'Invalid username or password' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-gradient-side">
        <div className="auth-welcome-text">
          <h1>Welcome Back!</h1>
          <p>Please login to your account</p>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-card">
          <h2>Login</h2>
          <p className="auth-subtitle">Welcome back! Please login to your account.</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>USERNAME / EMAIL</label>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? 'error' : ''}
                placeholder="Enter username or email"
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label>PASSWORD</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="**********"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {errors.submit && (
              <div className="error-message submit-error">{errors.submit}</div>
            )}

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Signing In...' : 'Login'}
            </button>
          </form>

          <p className="auth-footer">
            Don&apos;t have an account yet? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;