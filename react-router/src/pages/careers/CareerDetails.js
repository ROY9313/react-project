import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CareerDetails() {
  const { id } = useParams();
  const [career, setCareer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    salary: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/careers/${id}`);
        setCareer(response.data);
        setFormData({ 
          title: response.data.title,
          location: response.data.location,
          salary: response.data.salary,
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/careers/${id}`, formData);
      setCareer(response.data); 
      setIsEditing(false); 
    } catch (error) {
      console.error('Error updating career:', error);
    }
  };


  

  return (
    <div className="career-details">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && career && ( 
        <>
          {isEditing ? (
            <form onSubmit={handleUpdate}>
              <h2>Edit Career Details</h2>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
              <label htmlFor="salary">Salary:</label>
              <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} />
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          ) : ( 
            <>
              <h2>Career Details for {career.title}</h2>
              <p>Starting salary: {career.salary}</p>
              <p>Location: {career.location}</p>
              <div className="details">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dignissim lectus, eu bibendum elit condimentum congue. Pellentesque consequat, dui at ultrices volutpat, eros est egestas nisi, eget ornare mauris elit eu ligula.</p>
              </div>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
