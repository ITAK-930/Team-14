import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]); // State to hold fetched services
    const [loading, setLoading] = useState(true); // State to indicate loading
    const [error, setError] = useState(null); // State for handling errors

    useEffect(() => {
        // Function to fetch services data
        const fetchServices = async () => {
            try {
                const response = await fetch('https://api.example.com/services'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                setServices(data); // Update state with fetched data
            } catch (err) {
                setError(err.message); // Handle any errors
            } finally {
                setLoading(false); // Set loading to false after completion
            }
        };

        fetchServices(); // Call the function
    }, []); // Empty dependency array ensures it runs only once

    if (loading) return <p>Loading services...</p>; // Show loading indicator
    if (error) return <p>Error: {error}</p>; // Show error message

    return (
        <section className="services-section">
            <h2>Our Services</h2>
            <div className="service-list">
                {services.map(service => (
                    <div key={service.id} className="service">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
