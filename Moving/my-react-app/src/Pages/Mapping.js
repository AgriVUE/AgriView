import React, { useState } from 'react';
import Container from '../Components/Container'; // Correct import path
import '../ComponentCss/Mapping.css'; // Correct path for your CSS file

// Import SVG images
import DamsImage from '../Images/Dams.svg';
import DroughtImage from '../Images/Drought.svg';
import FloodingImage from '../Images/Flooding.svg';
import PrecipitationImage from '../Images/Precipitation.svg';
import SoilMoistureImage from '../Images/Soil Moisture.svg';

const MappingPage = () => {
    const [view, setView] = useState('map'); // State to track the current view
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State for selected image index

    // Array of preset images imported
    const presetImages = [
        DamsImage,
        DroughtImage,
        FloodingImage,
        PrecipitationImage,
        SoilMoistureImage,
    ];

    // Array of insight names
    const insightNames = [
        'Dam Information',
        'Drought Risk Analytics',
        'Flood Risk Analytics',
        'Precipitation Analytics',
        'Soil Moisture Analytics',
    ];

    // Handle view change
    const handleViewChange = (event) => {
        const selectedView = event.target.value;
        setView(selectedView);

        // Reset to the first image if switching back to images
        if (selectedView !== 'map') {
            setSelectedImageIndex(0);
        }
    };

    // Handle image selection
    const handleImageChange = (event) => {
        setSelectedImageIndex(event.target.value);
    };

    return (
        <div className="content">
            <Container content={[
                <h2 key="1">Mapping Data</h2>,
                <div 
                    className="map-container" 
                    key="2" 
                    style={{ 
                        width: '100%', 
                        maxWidth: '1200px', // Set max width for large screens
                        margin: '0 auto', // Center horizontally
                        backgroundColor: 'white', 
                    }}
                >
                    {view === 'map' ? (
                        <iframe
                            title="Google Maps"
                            width="100%"
                            height="600px" // Set height for the map
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(United%20States)&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                            <a href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>
                    ) : (
                        <img 
                            src={presetImages[selectedImageIndex]} 
                            alt={insightNames[selectedImageIndex]} 
                            style={{ 
                                width: '100%', 
                                maxWidth: '1200px', // Ensure it doesn’t exceed container width
                                height: 'auto', // Maintain aspect ratio
                                display: 'block',
                                margin: '0 auto', // Center horizontally
                            }} 
                        />
                    )}
                </div>,
                <div key="3" style={{ marginTop: '20px', textAlign: 'center' }}>
                    <select 
                        id="view-select" 
                        value={view} 
                        onChange={handleViewChange} 
                        className="dropdown"
                    >
                        <option value="map">Google Map</option>
                        <option value="image">Data Insights</option>
                    </select>

                    {view === 'image' && (
                        <select 
                            id="image-select" 
                            value={selectedImageIndex} 
                            onChange={handleImageChange} 
                            className="dropdown"
                            style={{ marginTop: '10px' }} // Additional margin for spacing
                        >
                            {insightNames.map((name, index) => ( 
                                <option key={index} value={index}>
                                    {name} 
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            ]} />
        </div>
    );
};

export default MappingPage;
