import React, { useState } from "react";
import axios from "axios";

import Form from "./components/Form";

function App() {
  const [flightPrices, setFlightPrices] = useState([]);

  let fares = Object.values(flightPrices);

  function getFlightsAndFares(origin, destination, date) {
    const API_URL = "/getFlights";
    return axios
      .get(API_URL, {
        params: {
          origin,
          destination,
          date,
        },
      })
      .then((response) => setFlightPrices(response.data))
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  function handleFormSubmit(event, origin, destination, flightDate) {
    event.preventDefault();
    getFlightsAndFares(origin, destination, flightDate);
  }

  return (
    <div className="bg-gray-100 py-4">
      <h1 className="text-2xl text-center font-bold mb-4">Flight Price</h1>

      <Form handleFormSubmit={handleFormSubmit} />
      <p className="mt-4 text-sm text-red-500">
        Note: This form only gets the flights for major Indian cities("Delhi",
        "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Kolkata", "Cochin",
        "Ahmedabad", "Pune", "Jaipur",). The fares shown in the list below are
        not real-time nor real.
      </p>
      {
        <div className="mt-4 ml-4">
          <p className="font-bold mb-2">Flight prices:</p>
          <ul>
            {Object.keys(flightPrices).map((flight, index) => (
              <li key={index}>
                {flight} : {fares[index]}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default App;
