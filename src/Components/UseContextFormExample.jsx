import React, { createContext, useContext, useReducer, useEffect } from "react";
const LocationContext = createContext();
const locationReducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return { ...state, country: action.payload, state: "", city: "" };
    case "SET_STATE":
      return { ...state, state: action.payload, city: "" };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      localStorage.removeItem("location");
      return initialLocation;
    default:
      return state;
  }
};

const initialLocation = {
  country: "",
  state: "",
  city: "",
  name: "",
  email: "",
};

const LocationProvider = ({ children }) => {
  const [location, dispatch] = useReducer(locationReducer, initialLocation);

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
  useEffect(() => {
    console.log("Updated Location:", location);
    localStorage.setItem("location", JSON.stringify(location));
  }, [location]);

  return (
    <LocationContext.Provider
      value={{
        location,
        countries,
        dispatch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

const LocationForm = () => {
  const { location, countries, dispatch } = useContext(LocationContext);

  const states = location.country ? Object.keys(countries[location.country]) : [];
  const cities = location.state ? countries[location.country][location.state] : [];

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("submittedLocation", JSON.stringify(location));

    console.log("Form Submitted:", location);
    alert("Form Submitted Successfully!");

    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <form className="form3" style={{ width: "400px" }} onSubmit={handleSubmit}>
        <h3 className="head1">Location Form</h3>
        <div className="label2 mt-1" style={{ width: "100%" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          />
          <br />
        </div>
        <div className="label2 mt-1" style={{ width: "100%" }}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.email}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
          />
          <br />
        </div>
        <div className="label1 mt-1" style={{ width: "100%" }}>
          <label>Country</label>
          <select
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.country}
            onChange={(e) => dispatch({ type: "SET_COUNTRY", payload: e.target.value })}
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
        <div className="label1 mt-1" style={{ width: "100%" }}>
          <label>State</label>
          <select
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.state}
            onChange={(e) => dispatch({ type: "SET_STATE", payload: e.target.value })}
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
        <div className="label1 mt-1" style={{ width: "100%" }}>
          <label>City</label>
          <select
            className="box3 p-1"
            style={{ width: "100%" }}
            value={location.city}
            onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
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
          <a href="" className="link" style={{ color: "rgb(235, 32, 59)" }}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

const UseReducerFormExample = () => {
  return (
    <LocationProvider>
      <LocationForm />
    </LocationProvider>
  );
};

export default UseReducerFormExample;
