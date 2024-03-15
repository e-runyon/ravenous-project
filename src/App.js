import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import burger from './burger.png'

function App() {
  // Business Example
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
  const arr = new Array(6);
  arr.fill(biz);

  return (
    <div>
      <header className="App">
        <title>Ravenous: Local Food Finder</title>
        <h1>ravenous</h1>
      </header>
      <SearchBar  />
      <BusinessList list={arr} />
    </div>
  );
}

export default App;
