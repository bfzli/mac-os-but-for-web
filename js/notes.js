// Show & Hide Weather
const notes_btn = document.querySelector('#notes-btn');
const notes_box = document.querySelector('#head');
notes_btn.addEventListener('click', () => {
    !notes_box.classList.toggle('show')
})

const addBtn = document.getElementById("add-btn");
var addTitle = document.getElementById("note-title");
var addTxt = document.getElementById("note-text");
addBtn.addEventListener("click", () => {
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Permbajtja e Shenimit dhe titulli jan boshe.")
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let content = "";
    notesObj.forEach((element, index) => {
        content += `
        <div class="note">
            <h3 class="note-title"> ${element.title} </h3>
            <button id="${index}" onclick="deleteNote(this.id)" class="note-btn-sm">
            <img class="add-ic" src="./img/clear.svg" width="22" alt="Add Note"></button>
            <button id="${index}" onclick="editNote(this.id)" class="note-btn-sm edit-btn">
              <img class="add-ic" src="./img/add.svg" width="22" alt="Add Note"></button>
        </div>
            `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = content;
    } else {
        notesElm.innerHTML = `<span class="fly">Nuk ka shenime, shtoni nje! </span>`;
    }
}

function deleteNote(index) {
    let confirmDel = confirm("A jeni te sigurt qe deshironi ta fshini Shenimin tuaj?");
    if (confirmDel == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}

function editNote(index) {
    let notes = localStorage.getItem("notes");

    if (addTitle.value !== "" || addTxt.value !== "") {
        return alert("Ju lutem fshini te dhenat nga forma per ta redaktuar nje shenim.")
    }

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.findIndex((element) => {
        addTitle.value = element.title;
        addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

showNotes();

const clear_alls = document.querySelector('#clearallnotes');
clear_alls.addEventListener('click', () => {
    localStorage.clear('notes');
})