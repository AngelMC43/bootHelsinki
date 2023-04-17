export default function Filter({
  search,
  countries,
  handleChange,
  weather,
  filterCountries,
  single,
  setSingle,
}) {
  const handleButton = (country) => {
    setSingle(single === country ? null : country);
  };
  console.log(weather);
  return (
    <>
      <div>
        Find countries
        <input type="search" onChange={handleChange} value={search} />
        {filterCountries.length < 11 && filterCountries.length > 1 ? (
          filterCountries.map((country) => (
            <li key={country.name}>
              {country.name}
              <button onClick={() => handleButton(country.name)}>show</button>
              {single === country.name && (
                <>
                  <div key={country.name}>
                    <h1>{country.name}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <h2>Languages</h2>
                    <ul>
                      {country.languages.map((i) => (
                        <li key={i.name}>{i.name}</li>
                      ))}
                    </ul>
                    <img src={country.flags?.png} alt="flag" />
                  </div>

                  <span>
                    <h2>Weather in {weather.location?.name} </h2>
                    <p>
                      Temperature: {weather.current?.temperature}
                      {weather.request?.unit}
                    </p>
                    <img src={weather.current?.weather_icons} alt="icon" />
                    <p>
                      Wind: {weather.current?.wind_speed}
                      direction {weather.current?.wind_dir}
                    </p>
                  </span>
                </>
              )}
            </li>
          ))
        ) : filterCountries.length === 1 ? (
          <>
            <ul>
              {filterCountries.map((country) => (
                <div key={country.name}>
                  <h1>{country.name}</h1>
                  <p>Capital: {country.capital}</p>
                  <p>Population: {country.population}</p> <h2>Languages</h2>
                  <ul>
                    {filterCountries.map((i) =>
                      i.languages.map((i) => <li key={i.name}>{i.name}</li>)
                    )}
                  </ul>
                  <img src={country.flags?.png} alt="flag" />
                </div>
              ))}
            </ul>
            {filterCountries.map((key) => (
              <span key={key.name}>
                <h2>Weather in {weather.location?.name} </h2>
                <p>
                  Temperature: {weather.current?.temperature}
                  {weather.request?.unit}
                </p>
                <img src={weather.current?.weather_icons} alt="icon" />
                <p>
                  Wind: {weather.current?.wind_speed}
                  direction {weather.current?.wind_dir}
                </p>
              </span>
            ))}
          </>
        ) : (
          <p>Too many matches, specify another filter</p>
        )}
      </div>
    </>
  );
}
