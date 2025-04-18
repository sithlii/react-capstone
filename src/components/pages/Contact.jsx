import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({...prevState, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    toast.success('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChanges}
              required
              placeholder="Enter your first name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChanges}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChanges}
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChanges}
            required
            placeholder="What would you like to tell us?"
            rows="5"
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <h3>Address:</h3>
        <p>1234 Main St, Anytown, USA</p>
        <h3>Phone:</h3>
        <p>123-456-7890</p>
        <h3>Email:</h3>
        <p>info@example.com</p>
      </div>
    </div>
  );
}