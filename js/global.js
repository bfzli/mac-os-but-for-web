



// // Dark Mode
// mode.addEventListener('click', () => {
//     pickBody.classList.toggle("darkmode");
//     localStorage.setItem('mode', newmode)
// })

// window.onload = () => {
//     const newmode = localStorage.getItem('mode')
//     document.body.classList.add(newmode);
// }
// // Dark Mode


// // Time and Date
// time.innerHTML = new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit", hour12: false});
// date.innerHTML = (new Date()).toString().split(' ').splice(1, 3).join(' ');
// // Time and Date
// const mode = document.getElementById("menu-btn");
// const pickBody = document.body;
// const newmode = pickBody.classList.contains('darkmode') ? 'darkmode' : 'lightmode';


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();