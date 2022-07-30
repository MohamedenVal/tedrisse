const countdown = () => {
    const date = new Date("August 12, 2022 05:00:00").getTime()

    const now = new Date().getTime()
    const td = date - now;

    
    const seconds = 1000;
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24  
    
    
    const daysToLaunch = Math.floor(td / days);
    let hoursToLaunch = Math.floor((td % days)/hours);
    let minutesToLaunch = Math.floor((td % hours )/minutes);
    let secondsToLaunch = Math.floor((td % minutes) / seconds);

    hoursToLaunch = hoursToLaunch < 10 ? "0" + hoursToLaunch : hoursToLaunch
    minutesToLaunch = minutesToLaunch < 10 ? "0" + minutesToLaunch : minutesToLaunch
    secondsToLaunch = secondsToLaunch < 10 ? "0" + secondsToLaunch : secondsToLaunch

    document.getElementById('days').innerHTML = daysToLaunch; 
    document.getElementById('hours').innerHTML = hoursToLaunch; 
    document.getElementById('minutes').innerHTML = minutesToLaunch; 
    document.getElementById('seconds').innerHTML = secondsToLaunch; 
}

countdown();
setInterval(countdown, 100)