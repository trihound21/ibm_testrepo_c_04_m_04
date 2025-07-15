// FUNCTIONS
function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    // const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    // const apiUrl = 'YOUR_API_URL'; // Replace 'YOUR_API_URL' with your actual API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // URL for Practice Task
    // const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })

    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

// Practice Task

// 1. You will use another URL to access details weather reports.
// For example you need to use URL as shown in given screenshot
// by accessing the same page from where you use URL to be used in the lab instructions.

// Note: Instead of city name, now you will gather details
// for latitude and longitude from user.

// 2. For this you need to take two <input> fields,
// one to access latitude and to get longitude value from user.

// 3. You need to create one submit button
// after clicking on which it will display the results.

// 4. Then apply fetch api method to get data related to weather
// for the user input and create javaScript code for the same.