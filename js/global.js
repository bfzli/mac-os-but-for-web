// Dark Mode Theme Switcher
const theme_btn = document.querySelector('#theme');
theme_btn.addEventListener('click', () => {
    if (document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
    } else document.body.classList.add('darkmode');
})

// Time and Date
function date_and_time() {
    const time_now = document.querySelector('#timenow');
    var current_day = new Date();
    var current_time = current_day.getHours() + ':' + current_day.getMinutes();
    time_now.textContent = current_time;
} (date_and_time());