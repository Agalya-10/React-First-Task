import React, { useContext } from 'react';
import { LocationContext } from '../Context/LocationContext';

const Country = () => {
  const { country, setCountry } = useContext(LocationContext);

  return (
    <div>
      <label htmlFor="country">Country</label>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="form-control"
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
    </div>
  );
};

export default Country;
