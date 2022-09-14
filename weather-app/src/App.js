import React from 'react';
const api = {
  key:"75f3fdf49964ec379cdd41990752cdf7",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box"> 
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
         </div>
      </main>
    </div>
  );
}

export default App;
