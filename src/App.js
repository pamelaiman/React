import logo from './logo.svg';
import Button from './Button.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Pamela's React App.</h1>
        <p>Please press the button below.</p>
        <Button />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pamela's <code>App</code> is running.
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

export default App;
