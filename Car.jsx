import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleCarYear(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleCarMake(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleCarModel(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleCarYear} />
      <br />
      <input type="text" value={car.make} onChange={handleCarMake} />
      <br />
      <input type="text" value={car.model} onChange={handleCarModel} />
    </div>
  );
}
export default Car;
