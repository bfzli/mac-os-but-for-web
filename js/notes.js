// const add = document.querySelector('#ok-confirm');
// const refuse = document.querySelector('#no-confirm');
// const textarea = document.getElementById('textarea');
// const popup = document.querySelector('.notifications');
// const popup_add = document.querySelector('#popup-confirm-add');
// const notes_list = document.querySelector('.notes-list');
// const notes = document.querySelector('#notes')
// const notes_btn = document.querySelector('#notes-btn');
// const title = document.querySelector('#title');


// add.addEventListener('click', () => {
//     notes_list.innerHTML += `
//             <div class="note-which">
//             <h5 id="title" class="note-which-title check">${textarea.value}</h5>
//             </div>
//             <div class="divider"></div>
//             `;
//     textarea.innerHTML = '';
//     localStorage.setItem(textarea.value, null);
//     popup.classList.add('hide');
// });

// const note_input_area = document.querySelector(".note-area");
// note_input_area.addEventListener('keyup', (event) => {
//     localStorage.setItem(`${textarea.value}`, event.target.value);
// });

// refuse.addEventListener('click', () => {
//     popup.classList.remove('show')
// });

// const addnote = document.querySelector('#add_note');
// addnote.addEventListener('click', () => popup.classList.add('show'))


// for (var i = 0; i < localStorage.length; i++) {
//     notes_list.innerHTML += `
//             <div class="note-which">
//                 <h5 id="title" class="note-which-title check">${localStorage.key(i)}</h5>
//             </div>
//             <div class="divider"></div>
//             `;
// };


// const clear_storage = document.querySelector('#clear_storage');
// clear_storage.addEventListener('click', () => {
//     localStorage.clear();
//     notes_list.innerHTML = 'No not"s in the list'
// });


// title.addEventListener('click', () => {
//     var textBoxes = document.querySelectorAll('[id^=title]');
//     for (var i in textBoxes) {
//         for (var j = 0; j < localStorage.length; j++) {
//             if (title.innerHTML == localStorage.key) {
//                 console.log(`I found it: ${localStorage.key}`)
//                 localStorage.getItem(localStorage.key)
//                 textarea.innerHTML = textarea.value;
//             }
//         }
//     }
// });


// /* dont touch */

// notes_btn.addEventListener('click', () => {
//     if (!notes.classList.contains('show')) {
//         notes.classList.add('show')
//     } else notes.classList.remove('show');
// })

//     (function (elementSelector) {
//         var direkcioniX, direkcioniY, objInitLeft, objInitTop, inDrag = false, dragTarget = document.querySelector(elementSelector);
//         dragTarget.addEventListener("mousedown", function (e) {
//             inDrag = true;
//             objInitLeft = dragTarget.offsetLeft;
//             objInitTop = dragTarget.offsetTop;
//             direkcioniX = e.pageX; direkcioniY = e.pageY;
//         });
//         document.addEventListener("mousemove", function (e) {
//             if (!inDrag) {return;}
//             dragTarget.style.left = (objInitLeft + e.pageX - direkcioniX) + "px";
//             dragTarget.style.top = (objInitTop + e.pageY - direkcioniY) + "px";
//         });
//         document.addEventListener("mouseup", function (e) {inDrag = false;});
//     }("#notes"));

//     // title.addEventListener('click', () => {
// //     for (var j = 0; j < localStorage.length; j++) {
// //         if (title.innerHTML == localStorage.key) {
// //             console.log(`I found it: ${localStorage.key}`)
// //         }
// //     }
// //     console.log("err");
// // });