import React, { useState } from "react";


function SearchBar() {
    const sortArr = ["best-match", "highest-rated", "most-reviewed"]
    const [term, setTerm] = useState();
    const [location, setLocation] = useState();
    const [sort, setSort] = useState();
    

    function handleSelectSort(event) {
      setSort(event.target.id);
    }

    function displayResults() {
      alert(`Sort By: ${sort}\nTerm(s): ${term}\nLocation: ${location}`)
    }

    const isActive = (sortString) => sortString == sort ? "sort" : sortString;

    return (
      <div className='Search'>
        <form action=''>
          <div className="sortby">
            <div id={isActive(sortArr[0])} onClick={handleSelectSort}>Best Match</div>
            <div id={isActive(sortArr[1])} onClick={handleSelectSort}>Highest Rated</div>
            <div id={isActive(sortArr[2])} onClick={handleSelectSort}>Most Reviewed</div>
          </div>
          <div className="textfields">
              <input type='text' value={term}     onChange={event => setTerm(event.target.value)}     id="searchTerm"     placeholder="Search Businesses" />
              <input type='text' value={location} onChange={event => setLocation(event.target.value)} id="searchLocation" placeholder="Where?" />
          </div>
          <input type="submit" id="submit" value="Let's Go" onClick={displayResults} />
        </form>
      </div>
    )
  }

  export default SearchBar;