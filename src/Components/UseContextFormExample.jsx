import React, { createContext, useContext, useState } from "react";


const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
  });

 
  const countries = {
    India: {
      TamilNadu: ["Chennai", "Madurai", "Thanjavur"],
      Kerala: ["Kochi", "Trivandrum"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"],
    },
  };

  //  country 
  const handleCountryChange = (country) => {
    setLocation({ country, state: "", city: "" });
  };

// state
  const handleStateChange = (state) => {
    setLocation((prev) => ({ ...prev, state, city: "" }));
  };

  //  city 
  const handleCityChange = (city) => {
    setLocation((prev) => ({ ...prev, city }));
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        countries,
        handleCountryChange,
        handleStateChange,
        handleCityChange,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

const LocationForm = () => {
  const {
    location,
    countries,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
  } = useContext(LocationContext);

  const states = location.country ? Object.keys(countries[location.country]) : [];
  const cities = location.state ? countries[location.country][location.state] : [];

  return (
    <div>
      <form  className="form2" style={{ width: '400px' }}>
      <h3 style={{ textAlign:'center' }}>Location Form</h3>
<div className="label2 mt-3" style={{ width: '100%' }}>
      <label> Name </label>
      <input type="text" name="name" placeholder="Name" autoComplete="off"></input><br/>
      </div>
      <div className="label2 mt-3" style={{ width: '100%' }}>
      <label> Email </label>
      <input type="text" name="email" placeholder="Email" autoComplete="off"></input><br/>
</div>
        {/* Country*/}
        <div className="label1 mt-3" style={{ width: '100%' }}>
        <label>Country </label>
        <select
          value={location.country}
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="" disabled>Select Country</option>
          {Object.keys(countries).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select><br/>

        </div>

        {/* State*/}
        <div className="label1 mt-3" style={{ width: '100%' }}>
        <label> State </label>
        <select
          value={location.state}
          onChange={(e) => handleStateChange(e.target.value)}
          disabled={!location.country}
        >
          <option value="" disabled>Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select><br/>
</div>
       {/* city */}
       <div className="label1 mt-3" style={{ width: '100%' }}>
        <label> City </label>
        <select
          value={location.city}
          onChange={(e) => handleCityChange(e.target.value)}
          disabled={!location.state}
        >
          <option value="" disabled>Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        </div>
        <button className="button2" type="submit" style={{ width: '100%' }}>Register
              {/* {rowData ? 'Update' : 'Register'} */}
            </button>
            <p className="para2">
              Already have an Account?
              <a
                href=""
                // onClick={() => navigate('/FormTask')}
                className="link"
                 style={{color:' rgb(235, 32, 59)'}}
              >
                Login
              </a>
            </p>
      </form>
      {/* <button>Submit</button> */}
      {/* <h3>
        Selected Location: {location.country} - {location.state} - {location.city}
      </h3> */}
    </div>
  );
};

// Main App
const UseContextFormExample = () => {
  return (
    <LocationProvider>
      <LocationForm />
    </LocationProvider>
  );
};

export default UseContextFormExample;
