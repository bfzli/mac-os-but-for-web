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
    let temp = document.querySelector('.temp');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
}

// Show & Hide Weather
weather_btn.addEventListener('click', () => {
    if (!weather.classList.contains('show')) {
        weather.classList.add('show')
    } else weather.classList.remove('show');
})