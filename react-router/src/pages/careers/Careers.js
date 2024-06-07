import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newCareerData, setNewCareerData] = useState({
    title: '',
    location: '',
    salary: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:4000/careers');
        setCareers(response.data);
      } catch (error) {
        setError(error);
      } 
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (careerId) => {
    try {
      const confirmation = window.confirm('Are you sure you want to delete this career?');
      if (!confirmation) return; // Exit if user cancels

      const response = await axios.delete(`http://localhost:4000/careers/${careerId}`);
      setCareers(careers.filter((career) => career.id !== careerId)); // Update state
    } catch (error) {
      console.error('Error deleting career:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:4000/careers', newCareerData);
      setCareers([...careers, response.data]); // Update state with new career
      setNewCareerData({ title: '', location: '', salary: '' }); // Reset form data
    } catch (error) {
      console.error('Error creating career:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

    const handleNewCareerChange = (event) => {
        setNewCareerData({ ...newCareerData, [event.target.name]: event.target.value });
    };

  return (
    <div className="careers">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <>
          <h2>Careers</h2>
          <ul>
            {careers.map((career) => (
              <li key={career.id}>
                <Link to={career.id.toString()}>
                  <p>{career.title}</p>
                  <p>{career.location}</p>
                </Link>
                <button onClick={() => handleDelete(career.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <h3>Create New Career</h3>
          <form onSubmit={handleCreate}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" placeholder='title' value={newCareerData.title} onChange={handleNewCareerChange} required />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" placeholder='location' value={newCareerData.location} onChange={handleNewCareerChange} required />
            <label htmlFor="salary">Salary:</label>
            <input type="text" id="salary" name="salary" placeholder='salary' value={newCareerData.salary} onChange={handleNewCareerChange} required />
            <button type="submit">Create Career</button>
          </form>
        </>
      )}
    </div>
  );
}