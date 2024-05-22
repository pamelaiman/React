import logo from './logo.svg';
import Button from './Button.js';
import './App.css';
import Link from './Link.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pamela Iman</h1>

        <p>Click below and 'inspect element' for a surprise</p>
        <Button /><br /><br />
        <p>This React application website was created on VS Code using CSS Style sheets, JavaScript and HTML. The code can be found on my GitHub.</p>
        <p> Here is a bit about me:
        <li>My name is Pamela.</li>
        <li>I have an Undergraduate degree in Adult Nursing.</li>
        <li>I am currently learning new coding languages such as: Python, React, HTML, JavaScript, SQL.</li>


        </p>

        <p>Please click the images below to access my GitHub and LinkedIn profiles.</p>
        <Link imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        linkAddress ="https://github.com/pamelaiman"/>
        <br />
        <Link imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        linkAddress ="https://www.linkedin.com/in/pamela-iman"/>

        <img src={logo} className="App-logo" alt="logo" />

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
