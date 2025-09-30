import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // basic system
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }
    // 2nd
    // setVisited(true)
    // setVisited(Visited ? false : true);

    // third system
        setVisited(!visited);
        handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <h4>Capital : {country.capital.capital} </h4>
      <h4>Population : {country.population.population}</h4>
      {/* <h4>Languages : {country.languages.languages} </h4> */}
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
