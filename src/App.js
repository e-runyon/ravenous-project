import logo from './logo.svg';
import './App.css';

//Stock food picture for alignment purposes
import burger from './burger.png'

//Business Information Storage
const biz = {
  food: burger,
  name: "Burger Friend",
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
    <div className="App">
      <header className="App-header">
        <title>Ravenous: Local Food Finder</title>
        <h1>ravenous</h1>
      </header>
    </div>
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
      <ul className="BizList">
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
        <li>{arr[4]}</li>
        <li>{arr[5]}</li>
      </ul>
    </div>
  )
  
}

export {App, Business, BusinessList};
