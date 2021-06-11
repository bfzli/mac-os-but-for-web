const api = {
    key: "3528b0339975edfc0019c07f55c33ebf",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.weather_search');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.date');
    date.innerText = dateBuilder(now);
    console.log(now);
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

(function (elementSelector) {
    var direkcioniX, direkcioniY, objInitLeft, objInitTop;
    var inDrag = false;
    var dragTarget = document.querySelector(elementSelector);
    dragTarget.addEventListener("mousedown", function (e) {
        inDrag = true;
        objInitLeft = dragTarget.offsetLeft;
        objInitTop = dragTarget.offsetTop;
        direkcioniX = e.pageX; direkcioniY = e.pageY;
    });
    document.addEventListener("mousemove", function (e) {
        if (!inDrag) {return;}
        dragTarget.style.left = (objInitLeft + e.pageX - direkcioniX) + "px";
        dragTarget.style.top = (objInitTop + e.pageY - direkcioniY) + "px";
    });
    document.addEventListener("mouseup", function (e) {inDrag = false;});
}("#weather"));

weather_btn.addEventListener('click', () => {
    // if (!weather.classList.contains('show')) {
    //     weather.classList.add('show')
    // } else weather.classList.remove('show');

    !weather.classList.contains('show') ? weather.classList.add('show') : weather.classList.remove('show');
})