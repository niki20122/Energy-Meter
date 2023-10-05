function updateValues() {
    // Generate random decimal values with up to two digits
    var energy = (Math.random() * (500 - 100) + 100).toFixed(2);
    var power = (Math.random() * (30 - 10) + 10).toFixed(2);
    var voltage = (Math.random() * (240 - 110) + 110).toFixed(2);
    var current = (Math.random() * (0.50 - 0.10) + 0.10).toFixed(2);

    // Update the content on the page
    document.getElementById('energy').textContent = energy + ' Joules';
    document.getElementById('power').textContent = power + ' Watts';
    document.getElementById('voltage').textContent = voltage + ' Volts';
    document.getElementById('current').textContent = current + ' Amperes';
}

// Update values every 5 seconds (5000 milliseconds)
setInterval(updateValues, 5000);

// Initial update
updateValues();
