document.addEventListener('DOMContentLoaded', function() {
    fetchSpaceWeatherEvents();
});

function fetchSpaceWeatherEvents() {
    // Example URL for solar flare data. Update with your desired endpoint and parameters
    const apiUrl = 'https://api.nasa.gov/DONKI/FLR?startDate=2023-01-01&endDate=2023-01-31&api_key=DEMO_KEY';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displaySpaceWeatherEvents(data);
        })
        .catch(error => {
            console.error('Error fetching space weather data:', error);
            document.getElementById('weather-events').textContent = 'Failed to retrieve space weather data.';
        });
}

function displaySpaceWeatherEvents(events) {
    if (events.length > 0) {
        const content = events.map(event => `
            <div class="event">
                <h3>${event.flrID}</h3>
                <p><strong>Begin Time:</strong> ${event.beginTime}</p>
                <p><strong>Peak Time:</strong> ${event.peakTime}</p>
                <p><strong>End Time:</strong> ${event.endTime}</p>
                <p><strong>Class Type:</strong> ${event.classType}</p>
            </div>
        `).join('');
        document.getElementById('weather-events').innerHTML = content;
    } else {
        document.getElementById('weather-events').textContent = 'No recent space weather events found.';
    }
}
