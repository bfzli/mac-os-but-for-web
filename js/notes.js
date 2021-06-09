(function (elementSelector) {
    var direkcioniX, direkcioniY; var objInitLeft, objInitTop;
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
}("#notes"));

const add = document.querySelector('#ok-confirm');
const refuse = document.querySelector('#no-confirm');
const title_input = document.getElementById('title_input');
const popup = document.querySelector('.notifications');
const popup_add = document.querySelector('#popup-confirm-add');
const notes_list = document.querySelector('.notes-list');


add.addEventListener('click', () => {
    notes_list.innerHTML += `
            <div class="divider"></div>
            <div class="note-which">
            <h5 class="note-which-title">${title_input.value}</h5>
            </div>
            `;
    title_input.innerHTML = '';
    localStorage.setItem(title_input.value, null);
    popup.classList.add('hide');
});

const note_input_area = document.querySelector(".note-area");
note_input_area.addEventListener('keyup', (event) => {
    for (var i = 0; i < localStorage.length; i++) {
        if (event.target.value != event.target.value) {
            localStorage.setItem(`${title_input.value}`, event.target.value);
        } else console.log("You are not allowed to edit this")
    }
});


refuse.addEventListener('click', () => {
    popup.classList.remove('show')
});

function openAdder() {
    popup.classList.add('show')
}


for (var i = 0; i < localStorage.length; i++) {
    notes_list.innerHTML = `
        <div class="note-options">
            <div class="add-note">
                <img src="./img/add.svg" alt="Add Note">
            </div>
            <div class="clear-notes">
                <img src="./img/clear.svg" alt="Add Note">
            </div>
        </div>
            <div class="divider"></div>`
    notes_list.innerHTML += `
            <div class="note-which">
                <h5 class="note-which-title">${localStorage.key(i)}</h5>
            </div>
            `;
};



clear_and_trash.addEventListener('click', () => {
    localStorage.clear();
    notes_list.innerHTML = `
        <div class="note-options">
            <div class="add-note">
                <img src="./img/add.svg" alt="Add Note">
            </div>
            <div class="clear-notes">
                <img src="./img/clear.svg" alt="Add Note">
            </div>
        </div>`;
    console.log("f")
});