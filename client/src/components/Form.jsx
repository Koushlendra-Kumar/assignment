import React, { useState } from "react";

function Form(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flightDate, setFlightDate] = useState("");

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleFlightDateChange = (event) => {
    setFlightDate(event.target.value);
  };

  return (
    <form
      onSubmit={(event) =>
        props.handleFormSubmit(event, origin, destination, flightDate)
      }
      className="bg-white p-4 shadow-md rounded-md"
    >
      <div className="mb-4">
        <label htmlFor="origin" className="block text-gray-700 font-bold mb-2">
          Origin:
        </label>
        <input
          id="origin"
          type="text"
          value={origin}
          onChange={handleOriginChange}
          className="border border-gray-400 p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="destination"
          className="block text-gray-700 font-bold mb-2"
        >
          Destination:
        </label>
        <input
          id="destination"
          type="text"
          value={destination}
          onChange={handleDestinationChange}
          className="border border-gray-400 p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="flightDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Flight Date:
        </label>
        <input
          id="flightDate"
          type="date"
          value={flightDate}
          onChange={handleFlightDateChange}
          className="border border-gray-400 p-2 rounded w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Flight Price
      </button>
    </form>
  );
}

export default Form;
