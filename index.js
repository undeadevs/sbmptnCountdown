/**
 * 
 * @param {Date} untilDate 
 * @returns {Record<string, number>}
 */
function countdown(untilDate) {
    const dateDiffInMs = untilDate.getTime() - Date.now();
    const weeks = dateDiffInMs / 604800000;
    const days = (weeks % 1) * 7;
    const hours = (days % 1) * 24;
    const minutes = (hours % 1) * 60;
    const seconds = (minutes % 1) * 60;
    return {
        weeks,
        days,
        hours,
        minutes,
        seconds
    }
}

function onEnd(){
    const mainEl = document.querySelector('main');
    const endTemplateEl = document.getElementById('end-template');
    mainEl.innerHTML='';
    mainEl.appendChild(endTemplateEl.content.cloneNode(true));
}

window.addEventListener('load', () => {
    const untilDate = new Date('2022-06-23 16:00:00 GMT+8');
    const [weeksEl, daysEl, hoursEl, minutesEl, secondsEl] = Array.from(document.querySelectorAll('.countdown-value'));
    const countdownInterval = setInterval(()=>{
        if(Date.now()>untilDate.getTime()) {
            clearInterval(countdownInterval);
            onEnd();
            return;
        }
        const {weeks, days, hours, minutes, seconds} = countdown(untilDate);
        weeksEl.textContent = Math.floor(weeks);
        daysEl.textContent = Math.floor(days);
        hoursEl.textContent = Math.floor(hours);
        minutesEl.textContent = Math.floor(minutes);
        secondsEl.textContent = Math.floor(seconds);
    }, 500)
});