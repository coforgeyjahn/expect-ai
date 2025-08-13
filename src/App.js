import { useState } from 'react';
import './App.css';
import CompanyProfile from './companyProfile.js';
import LoginPopup from './loginPopup.js';

function App() {
  let [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="App">
    <header className="app-header">
      <div className="logo">Ask Una</div>
      <input className="search-input" placeholder="Search for your company to get started for free" />
      <button type="button" className="login-button" onClick={() => setLoginOpen(true)}>Sign in</button>
      {loginOpen && (
        <LoginPopup 
          onClose={() => setLoginOpen(false)}
        />
      )}
    </header>

      <div className="app-body">
        <div className="third company"><CompanyProfile /></div>
      </div>
    </div>
  );
}

export default App;
