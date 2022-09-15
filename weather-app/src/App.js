import React from 'react';
const api = {
  key:"75f3fdf49964ec379cdd41990752cdf7",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {

  const dateBuilder = (d) => {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day= days [d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app ">
      <main>
        <div className="search-box"> 
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
         </div>
        <div className="location-box">
          <div className="location">orlando, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
          
        </div>
        <div className="weather-box">
          <div className="temp">
            15 f
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
