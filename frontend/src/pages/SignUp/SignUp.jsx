import React, { useState } from 'react'
import './SignUp.scss'

const EyeIcon = ({ visible, onClick }) => (
  <span className="eye-icon" onClick={onClick} tabIndex={0} role="button" aria-label="Toggle password visibility">
    {visible ? (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="#000" strokeWidth="2"/><circle cx="10" cy="10" r="3" fill="#000"/></svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="#000" strokeWidth="2"/><line x1="4" y1="16" x2="16" y2="4" stroke="#000" strokeWidth="2"/></svg>
    )}
  </span>
);

const SignUp = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="signup-container minimal">
      <h2>Sign Up</h2>
      {submitted ? (
        <div className="success-message">Registration successful!</div>
      ) : (
        <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              autoComplete="username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="new-password"
              required
            />
            <EyeIcon visible={showPassword} onClick={() => setShowPassword(v => !v)} />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default SignUp