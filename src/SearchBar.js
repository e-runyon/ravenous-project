import React from "react";

function SearchBar() {
    return (
      <div className='Search'>
        <form action=''>
          <div className="sortby">
            <label>
              Best Match
              <input type='radio' id="best-match" value="" />
            </label>
            <label>
              Highest Rated
              <input type='radio' id="highest-rated" value="" />
            </label>
            <label>
              Most Reviewed
              <input type='radio' id="most-reviewed" value="" />
            </label>
          </div>
          <div className="textfields">
              <input type='text' id="what" defaultValue="Search Businesses" />
              <input type='text' id="where" defaultValue="Where?" />
          </div>
          <input type="submit" id="submit" value="Let's Go" />
        </form>
      </div>
    )
  }

  export default SearchBar;