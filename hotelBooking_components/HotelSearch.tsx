// app/hotelBooking_components/HotelSearch.tsx
import React, { useState } from 'react';

interface HotelSearchProps {
  onSearch: (latitude: string, longitude: string, zoom: string) => void;
}

const HotelSearch: React.FC<HotelSearchProps> = ({ onSearch }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [zoom, setZoom] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the onSearch callback with the latitude, longitude, and zoom values
    onSearch(latitude, longitude, zoom);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Latitude:
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </label>
        <label>
          Zoom:
          <input
            type="text"
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
          />
        </label>
        <button type="submit">Search Hotels</button>
      </form>
    </div>
  );
};

export default HotelSearch;
