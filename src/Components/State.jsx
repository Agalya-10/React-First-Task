import React, { useContext } from 'react';
import { LocationContext } from '../Context/LocationContext';

const State = () => {
  const { state, setState } = useContext(LocationContext);

  return (
    <div>
      <label htmlFor="state">State</label>
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="form-control"
      >
        <option value="">Select State</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Kerala">Kerala</option>
        <option value="Karnataka">Karnataka</option>
      </select>
    </div>
  );
};

export default State;
