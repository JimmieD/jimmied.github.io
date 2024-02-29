document.addEventListener('DOMContentLoaded', () => {
    fetchNotifications();
});

function fetchNotifications() {
    const endpoint = 'https://api.nasa.gov/DONKI/notifications?api_key=RrcElDMiJ7ea1dw1tuzhZpBXiHk9MIHQQ8TWMEuk';
    fetch(endpoint)
        .then(response => response.json())
        .then(data => displayNotifications(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayNotifications(data) {
    const container = document.getElementById('notification-summary');
    data.forEach(item => {
        const summaryMatch = item.messageBody.match(/## Summary:\n\n([\s\S]*?)\n\n##/);
        let summary = summaryMatch ? summaryMatch[1] : 'No summary available.';
        // Convert URLs within summary to clickable links
        summary = summary.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
        const div = document.createElement('div');
        div.innerHTML = summary; // Use innerHTML instead of textContent to render the link
        container.appendChild(div);
    });
}
