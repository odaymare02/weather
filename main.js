let result = document.getElementById("result");
let searchbtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");
const getWeather = async () => {
  let city = cityRef.value;
  if (city == "") {
    result.innerHTML = `
        <h3 class="msg">Please enter a city name</h3>
        `;
  } else {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c47b8fffb7bb4b4ca0395127241807&q=${city}&aqi=no`
      );
      let data = await response.json();
      result.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <h4 class="weather">${data.current.condition.text}</h4>
        <img src="${data.current.condition.icon}" />
        <h1>${data.current.temp_c} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.current.heatindex_c}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.current.feelslike_c}&#176;</h4>
            </div>
        </div>
       `;
    } catch (e) {
      result.innerHTML = `
            <h3 class="msg">City not found</h3>
            `;
      return;
    }
  }
};

searchbtn.addEventListener("click", getWeather);
