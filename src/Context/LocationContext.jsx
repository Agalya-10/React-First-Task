import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  return (
    <LocationContext.Provider value={{ city, setCity, state, setState, country, setCountry }}>
      {children}
    </LocationContext.Provider>
  );
};
