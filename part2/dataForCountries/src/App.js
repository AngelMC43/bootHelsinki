import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  const [single, setSingle] = useState(null);

  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search)
  );

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const capitalWeather = filterCountries[0]?.capital;
  const countryWeather = filterCountries[0]?.name;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capitalWeather},${countryWeather}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Filter
        countries={countries}
        handleChange={handleChange}
        search={search}
        weather={weather}
        filterCountries={filterCountries}
        setSingle={setSingle}
        single={single}
      />
    </div>
  );
};

export default App;
