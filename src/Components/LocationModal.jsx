import React from 'react';
import City from './City';
import State from './State';
import Country from './Country';

const LocationModal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Location</h2>
        <City />
        <State />
        <Country />
        <button onClick={handleClose} className="btn btn-primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
