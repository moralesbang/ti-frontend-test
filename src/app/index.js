import {Layout, useLayoutNavigation} from 'react-md';

import logo from '../logo.svg';
import './styles.scss';

const navItems = {};

function App() {
  return (
    <Layout
      {...useLayoutNavigation(navItems, window.location.pathname)}
      appBarTitle="react-md App"
      navHeaderTitle="My App"
    >
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
    </Layout>
  );
}

export default App;
