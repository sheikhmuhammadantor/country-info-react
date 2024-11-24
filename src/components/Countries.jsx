import React, { useState, useEffect } from "react";
import Country from "./Country";

function Countries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Im Am Countries</h1>
      <h2 className="text-2xl">Total Countries : {countries.length}</h2>
      <div className="grid grid-cols-3 mx-auto gap-4 place-items-center border border-green-400 rounded-xl p-5">
        {
          countries.map(country => <Country key={country?.cca3} country={country}></Country>)
        }
      </div>
    </div>
  );
}

export default Countries;
