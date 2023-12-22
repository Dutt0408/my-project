import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
 const [showInfo, setShowInfo] = useState(false);

 return (
    <div className="App">
      <header className="App-header">
        <h1>Collapsible Information</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? 'Hide Information' : 'Show Information'}
        </button>
      </header>
      {showInfo && (
        <div className="border-2 border-blue-500 p-4 mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      )}
    </div>
 );
};

export default App;