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
      <form  className="form3" style={{ width: '400px' }}>
      <h3  className="head1">Location Form</h3>
<div className="label2 mt-1 " style={{ width: '100%' }}>
      <label> Name </label>
      <input type="text" name="name" placeholder="Name" autoComplete="off"  className="box3 p-1" style={{width:'100%'}}></input><br/>
      </div>
      <div className="label2 mt-1" style={{ width: '100%' }}>
      <label> Email </label>
      <input type="text" name="email" placeholder="Email" autoComplete="off" className="box3 p-1" style={{width:'100%'}}></input><br/>
</div>
        {/* Country*/}
        <div className="label1 mt-1" style={{ width: '100%' }}>
        <label>Country </label>
        <select
          className="box3 p-1" 
          style={{width:'100%'}}
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
        <div className="label1 mt-1" style={{ width: '100%' }}>
        <label> State </label>
        <select
          className="box3 p-1"
          style={{width:'100%'}}
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
       <div className="label1 mt-1" style={{ width: '100%' }}>
        <label> City </label>
        <select
          className="box3 p-1" 
          style={{width:'100%'}}
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
            </button>
            <p className="para2">
              Already have an Account?
              <a
                href=""
                className="link"
                 style={{color:' rgb(235, 32, 59)'}}
              >
                Login
              </a>
            </p>
      </form>
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





import React, { createContext, useContext, useReducer, useEffect } from "react";

const LocationContext = createContext();

// Initial state
const initialState = JSON.parse(localStorage.getItem("location")) || {
  country: "",
  state: "",
  city: "",
};

// Reducer function
const locationReducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return { country: action.payload, state: "", city: "" };
    case "SET_STATE":
      return { ...state, state: action.payload, city: "" };
    case "SET_CITY":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

const LocationProvider = ({ children }) => {
  const [location, dispatch] = useReducer(locationReducer, initialState);

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

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("location", JSON.stringify(location));
  }, [location]);

  const handleCountryChange = (country) => {
    dispatch({ type: "SET_COUNTRY", payload: country });
  };

  const handleStateChange = (state) => {
    dispatch({ type: "SET_STATE", payload: state });
  };

  const handleCityChange = (city) => {
    dispatch({ type: "SET_CITY", payload: city });
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
      <form className="form3" style={{ width: "400px" }}>
        <h3 className="head1">Location Form</h3>
        <div className="label2 mt-1" style={{ width: "100%" }}>
          <label> Name </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            className="box3 p-1"
            style={{ width: "100%" }}
          />
          <br />
        </div>
        <div className="label2 mt-1" style={{ width: "100%" }}>
          <label> Email </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="box3 p-1"
            style={{ width: "100%" }}
          />
          <br />
        </div>
        {/* Country */}
        <div className="label1 mt-1" style={{ width: "100%" }}>
          <label>Country </label>
          <select
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.country}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="" disabled>
              Select Country
            </option>
            {Object.keys(countries).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <br />
        </div>

        {/* State */}
        <div className="label1 mt-1" style={{ width: "100%" }}>
          <label> State </label>
          <select
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.state}
            onChange={(e) => handleStateChange(e.target.value)}
            disabled={!location.country}
          >
            <option value="" disabled>
              Select State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <br />
        </div>
        {/* City */}
        <div className="label1 mt-1" style={{ width: "100%" }}>
          <label> City </label>
          <select
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.city}
            onChange={(e) => handleCityChange(e.target.value)}
            disabled={!location.state}
          >
            <option value="" disabled>
              Select City
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button className="button2" type="submit" style={{ width: "100%" }}>
          Register
        </button>
        <p className="para2">
          Already have an Account?
          <a
            href=""
            className="link"
            style={{ color: " rgb(235, 32, 59)" }}
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

const UseContextFormExample = () => {
  return (
    <LocationProvider>
      <LocationForm />
    </LocationProvider>
  );
};

export default UseContextFormExample;
