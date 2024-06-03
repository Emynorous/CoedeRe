import React, { useState } from 'react';
import './Report.css'; // Importing the CSS file

const Report = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    type: '',
    severity: '',
    timestamp: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('reports')) || [];
    existingData.push(formData);
    localStorage.setItem('reports', JSON.stringify(existingData));
    setFormData({
      id: '',
      name: '',
      type: '',
      severity: '',
      timestamp: '',
      description: '',
    });
    alert('Report saved successfully!');
  };

  return (
    <div className="container mt-5">
      <div className="report-box">
        <h2>Zadejte váš report</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Název</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Typ</label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="severity">Závažnost</label>
            <input
              type="text"
              className="form-control"
              id="severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="timestamp">Datum a Čas</label>
            <input
              type="datetime-local"
              className="form-control"
              id="timestamp"
              name="timestamp"
              value={formData.timestamp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Popis</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Report;