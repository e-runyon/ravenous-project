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
    <div className="App">
      <header className="App-header">
        <title>Ravenous: Local Food Finder</title>
        <h1>ravenous</h1>
      </header>
    </div>
  );
}

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

export {App, Business};
