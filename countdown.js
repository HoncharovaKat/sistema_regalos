document.addEventListener(`DOMContentLoaded`, () => {
    const newYear = new Date('Dec 25 2022 00:00:00');
    
    const daysVal = document.querySelector('.time-count_days .time-count_val');
    const hoursVal = document.querySelector('.time-count_hours .time-count_val');
    const minutesVal = document.querySelector('.time-count_minutes .time-count_val');
    const secondsVal = document.querySelector('.time-count_seconds .time-count_val');


    const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now;
        
        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;


    };
    timeCount();
    setInterval(timeCount, 1000);
});

 
