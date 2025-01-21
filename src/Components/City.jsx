import React, { useContext } from 'react';
import { LocationContext } from '../Context/LocationContext';

const City = () => {
  const { city, setCity } = useContext(LocationContext);

  return (
    <div> 
      <label htmlFor="city">City</label>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="form-control"
      >
        <option value="">Select City</option>
        <option value="Thanjavur">Thanjavur</option>
        <option value="Madurai">Madurai</option>
        <option value="Chennai">Chennai</option>
      </select>
    </div>
  );
};

export default City;
