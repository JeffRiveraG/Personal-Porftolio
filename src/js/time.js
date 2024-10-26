function updateTime() {
    const options = { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('time').textContent = `${timeString} (PST)`;
}

setInterval(updateTime, 1000); 
updateTime();
