const temperature = document.getElementById("temperature");
const citys = document.getElementById("city");
const weathericon = document.getElementById("weather-icon");
const locat = document.getElementById("location");
const cloud = document.getElementById("cloud");
const Humidity = document.getElementById("Humudity");
const wind = document.getElementById("Wind");
const btn1 = document.getElementById("btn");
const err = document.querySelector('.error');

// Add an event listener for the Enter key
locat.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        btn1.click(); // Trigger the button click
    }
});

btn1.addEventListener("click", () => {
    weatherUpdate(locat.value);
});

async function weatherUpdate(city) {
    // Remove the "apper" class for animations
    citys.classList.remove("apper");
    temperature.classList.remove("apper");
    cloud.classList.remove("apper");
    Humidity.classList.remove("apper");
    wind.classList.remove("apper");
    err.classList.remove("apper");

    // Use HTTPS in the API URL
    let URL = `your url`;
    
    try {
        const response = await fetch(URL);
        
        if (response.status == 400) {
            err.style.display = "block";
        } else {
            const data = await response.json();

            // Update the UI with weather data
            temperature.textContent = data.current.temp_c + '°C';
            citys.textContent = data.location.name;
            cloud.textContent = data.current.condition.text;
            Humidity.textContent = data.current.humidity + '%';
            wind.textContent = data.current.wind_kph + ' Kmh';

            err.style.display = "none";
            
            // Add the "apper" class for animations
            citys.classList.add("apper");
            temperature.classList.add("apper");
            cloud.classList.add("apper");
            Humidity.classList.add("apper");
            wind.classList.add("apper");
            err.classList.add("apper");
        }
    } catch (error) {
        console.error('Fetch error:', error);
        err.style.display = "block";
    }
}
