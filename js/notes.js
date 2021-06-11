

// Add note to local storage
let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addTxt = document.getElementById("note-text");
addBtn.addEventListener("click", function (e) {
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Please add Note Title and Details")
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
    //   console.log(notesObj);
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="note">
            <h3 class="note-title"> ${element.title} </h3>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Fshije</button>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Shikoje</button>
        </div>
            `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
    }
}

// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);
    let confirmDel = confirm("Delete this note?");
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

// Function to Edit the Note
function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");

    if (addTitle.value !== "" || addTxt.value !== "") {
        return alert("Please clear the form before editing a note")
    }

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    console.log(notesObj);

    notesObj.findIndex((element, index) => {
        addTitle.value = element.title;
        addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


showNotes();


(function (elementSelector) {
    var direkcioniX, direkcioniY, objInitLeft, objInitTop, inDrag = false, dragTarget = document.querySelector(elementSelector);
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
}("#notes-container"));

const notes_btn = document.querySelector('#notes-btn');
const notes_container = document.querySelector('.container');
notes_btn.addEventListener('click', () => {
    if (!conatiner.contains('show')) {
        container.add('show')
    } else container.remove('show');
})