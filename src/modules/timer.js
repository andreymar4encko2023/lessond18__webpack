const timer =()=>{
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');
    let timerNumbers = document.querySelector('#timer')
    
    // let days =0
    let deadlaine = ('10 March 2023')
    const getTimerRemainin = (deadlaine) => {
        let deadlaineStop = new Date(deadlaine).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (deadlaineStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(timeRemaining / 60 / 60 % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let second = Math.floor(timeRemaining % 60)
        return {
            timeRemaining,
            days,
            hours,
            minutes,
            second,
    
        }
    }
    const updateClock = () => {
        let d = document.querySelector('#days')
        let getTime = getTimerRemainin(deadlaine)
        if (getTime.days !== 0 && getTime.days>0) {
            d.textContent = getTime.days + 'дн.'
        }
        if (getTime.hours < 10) {
            timerHours.textContent = '0' + getTime.hours
        } else {
            timerHours.textContent = getTime.hours
        };
        if (getTime.minutes < 10) {
            timerMinutes.textContent = '0' + getTime.minutes
        } else {
            timerMinutes.textContent = getTime.minutes
        }
        if (getTime.second < 10) timerSeconds.textContent = '0' + getTime.second
        else {
            timerSeconds.textContent = getTime.second
        }
    
        if (getTime.timeRemaining > 0) {
            setInterval(updateClock, 1000);
          }
          else{
            timerHours.textContent = 0
            timerMinutes.textContent = 0
            timerSeconds.textContent = 0
          }
    }
    
    updateClock()

}
export default timer