function attachEvents() {
  const btn = document.getElementById("submit");
  const location = document.getElementById("location");
  const currentDiv = document.querySelector("#current");
  const upcomingDiv = document.querySelector("#upcoming");
  const forecastDiv = document.querySelector("#forecast");
  btn.addEventListener("click", showWeather);
  const symbols = {
    Sunny: "&#x2600", // ☀
    "Partly sunny": "&#x26C5", // ⛅
    Overcast: "&#x2601", // ☁
    Rain: "&#x2614", // ☂
    Degrees: "&#176 ", // °
  };
  async function showWeather() {
    const response = await fetch(
      "http://localhost:3030/jsonstore/forecaster/locations"
    );
    const data = await response.json();
    for (const city of data) {
      if (city.name === location.value) {
        const curr = await retrieveWetherInfo(
          "http://localhost:3030/jsonstore/forecaster/today/",
          city.code
        );
        manipDom(symbols, curr, currentDiv, forecastDiv, true);
        const upcoming = await retrieveWetherInfo(
          "http://localhost:3030/jsonstore/forecaster/upcoming/",
          city.code
        );
        manipDom(symbols, upcoming, upcomingDiv);
      }
    }
  }
  async function retrieveWetherInfo(adress, code) {
    try {
      const res = await fetch(adress + code);
      const data = await res.json();
      return data;
    } catch (e) {}
  }
  function manipDom(symbols, forecastFor, div, forecastDiv, isToday) {
    if (isToday) {
      forecastDiv.style.display = "block";
      const forecasts = document.createElement("div");
      const conditionSymb = document.createElement("span");
      const condition = document.createElement("span");
      forecasts.className = "forecasts";
      forecasts.appendChild(conditionSymb);
      div.appendChild(forecasts);
      conditionSymb.className = "condition symbol";
      conditionSymb.innerHTML = symbols[forecastFor.forecast.condition];
      condition.className = "condition";
      for (let i = 0; i < 3; i++) {
        const span = document.createElement("span");
        span.className = "forecast-data";
        if (i === 0) {
          span.textContent = forecastFor.name;
        }
        if (i === 1) {
          span.innerHTML = `${forecastFor.forecast.low}&deg/${forecastFor.forecast.high}&deg`;
        }
        if (i === 2) {
          span.textContent = forecastFor.forecast.condition;
        }
        condition.appendChild(span);
      }
      forecasts.appendChild(condition);
    } else {
      for (const day of forecastFor.forecast) {
        const forecastInfo = document.createElement("div");
        const upcomingSpan = document.createElement("span");
        for (let i = 0; i < 3; i++) {
          const span = document.createElement("span");
          if (i === 0) {
            span.innerHTML = symbols[day.condition];
            span.className = 'symbol';
          }
          if (i === 1) {
            span.innerHTML = `${day.low}&deg/${day.high}&deg`;
            span.className = "forecast-data";
          }
          if (i === 2) {
            span.textContent = day.condition;
            span.className = "forecast-data";
          }
          upcomingSpan.appendChild(span);
        }
        upcomingSpan.className = 'upcoming';
        forecastInfo.className = 'forecast-info';
        forecastInfo.appendChild(upcomingSpan);
        div.appendChild(forecastInfo);
      }
    }
  }
}

attachEvents();
