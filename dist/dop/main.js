const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let data = new Date();
let date1 = data.getTime()
let date2 = new Date('12 31 2023')

let year = data.getFullYear()
let day = data.getDay()
let hours = data.getHours()

let minuts = data.getMinutes()
let second = data.getSeconds()
let month = data.getMonth()
let time = data.toLocaleTimeString("en");

let newYear = Math.floor((date2.getTime() - date1) / (1000 * 3600 * 24))
let hello = ""
let box = document.querySelector('.box')
let body = document.querySelector('body')


console.log(data.getDay())
switch (true) {
    case hours >= 5 && hours <= 11:
        hello = "Доброе утро";
        body.style.background = "url(./bg3.jpg)"
        break;
    case hours > 11 && hours <= 19:
        hello = "Добрый день";
        body.style.background = "url(./bg2.jpg)"
        break;
    case hours > 19 && hours <= 23:
        hello = "Добрый вечер";
        body.style.background = "url(./bg1.jpg)"
        break;
    case hours >= 0 && hours < 5:
        hello = "Доброй ночи";
        body.style.background = "url(./bg4.jpg)"
}
box.insertAdjacentHTML(`afterbegin`, `
<span >${hello}</span>
<span>Сегодня: ${week[day-1]}</span>
<span>Текущее время: ${time}</span>
<span>До нового года осталось ${newYear} дней</span>`)