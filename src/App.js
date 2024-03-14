import logo from './logo.svg';
import './App.css';

//Stock food picture for alignment purposes
import burger from './burger.png'

//Business Information Storage
const biz = {
  food: burger,
  name: "Burger Fiend",
  address: "1123 Pickle Ave",
  city: "Chedderfield",
  state: "WI",
  zipcode: 40604,
  category: "AMERICAN",
  rating: 4.5,
  reviews: 333,
}



function App() {
  return (
    <header className="App">
        <title>Ravenous: Local Food Finder</title>
        <h1>ravenous</h1>
    </header>
  );
}

//React Component
function Business() {
  return (
    <div className="Business-tile">
      <img src={biz.food} alt='' className='Food-tile'/>
      <h2>{biz.name}</h2>
      <div className="Details">
        <ul className='Location'>
          <li>{biz.address}</li>
          <li>{biz.city}</li>
          <li>{biz.state} {biz.zipcode}</li>
        </ul>
        <ul className='Rated'>
          <li><strong>{biz.category}</strong></li>
          <li><strong>{biz.rating} stars</strong></li>
          <li>{biz.reviews} Reviews</li>
        </ul>
      </div>
    </div>
  )
}

function BusinessList() {
  const arr = new Array(6);
  arr.fill(Business());
  return (
    <div className="BizDiv">
      <div className="box" id="box1">{arr[0]}</div>
      <div className="box" id="box2">{arr[1]}</div>
      <div className="box" id="box3">{arr[2]}</div>
      <div className="box" id="box4">{arr[3]}</div>
      <div className="box" id="box5">{arr[4]}</div>
      <div className="box" id="box6">{arr[5]}</div>
    </div>
  )
  
}

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


export {App, Business, BusinessList, SearchBar};
