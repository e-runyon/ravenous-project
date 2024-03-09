import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Business() {
  return (
    <div>
      <img />
      <h3>name</h3>
      <div>
        <ul>
          <li>address</li>
          <li>city</li>
          <li>state + zipcode</li>
        </ul>
        <ul>
          <li>category</li>
          <li>rating</li>
          <li>reviewcount</li>
        </ul>
      </div>
    </div>
  )
}

export {App, Business};
