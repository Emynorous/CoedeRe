import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReportsList = () => {
  const [reports, setReports] = useState([]);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    type: '',
    severity: '',
    name: '', // Added name filter
  });
  const [selectedReports, setSelectedReports] = useState([]);

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem('reports')) || [];
    setReports(storedReports);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = (reports) => {
    return reports.filter(report => {
      const reportDate = new Date(report.timestamp);
      const startDate = filters.startDate ? new Date(filters.startDate) : null;
      const endDate = filters.endDate ? new Date(filters.endDate) : null;

      const isWithinDateRange = (!startDate || reportDate >= startDate) && (!endDate || reportDate <= endDate);
      const isMatchingType = filters.type ? report.type === filters.type : true;
      const isMatchingSeverity = filters.severity ? report.severity === filters.severity : true;
      const isMatchingName = filters.name ? report.name.toLowerCase().includes(filters.name.toLowerCase()) : true;

      return isWithinDateRange && isMatchingType && isMatchingSeverity && isMatchingName;
    });
  };

  const handleSelectReport = (e, report) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedReports([...selectedReports, report]);
    } else {
      setSelectedReports(selectedReports.filter(r => r.id !== report.id));
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    doc.text('Selected Reports List', 20, 10);
    
    doc.autoTable({
      head: [['ID', 'Name', 'Type', 'Severity', 'Timestamp', 'Description']],
      body: selectedReports.map(report => [
        report.id, 
        report.name, 
        report.type, 
        report.severity, 
        report.timestamp, 
        report.description
      ]),
    });

    doc.save('selected_reports.pdf');
  };

  const filteredReports = applyFilters(reports);

  return (
    <div className="report-box">
      <h2>Reports List</h2>
      <div className="form-group">
        <label htmlFor="startDate">Nejdřívější datum</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">Nejpozdější datum</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Typ</label>
        <input
          type="text"
          className="form-control"
          id="type"
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="severity">Závažnost</label>
        <input
          type="text"
          className="form-control"
          id="severity"
          name="severity"
          value={filters.severity}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Název</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
        />
      </div>
      <button className="btn btn-primary mb-4" onClick={exportToPDF} disabled={selectedReports.length === 0}>
        Export Selected to PDF
      </button>
      <table className="table table-striped" style={{ color: '#ffffff' }}>
        {/* Table content */}
      </table>
    </div>
  );
};

export default ReportsList;