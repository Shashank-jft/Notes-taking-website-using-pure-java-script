console.log('Welcome to NotesApp ')
shownotes();

let addBtn = document.getElementById('addbtn')
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addTxt.value = '';
    //console.log(notesobj);
    shownotes();

})

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }

    else {
        notesobj = JSON.parse(notes);
    }

    let html = '';
    notesobj.forEach(function (element, index) {
        html += `
          
                <div class=" notecard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id= '${index}' onclick='deleteNote(this.id)' class="btn btn-primary">Delete Note</button>
                    </div>
                </div>
                `

    });

    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;

    }

    else {
        notesElm.innerHTML = `Nothing to show! Use a Add a note Section above to add note`
    }

}

function deleteNote(index) {
    //console.log("Deleted", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    shownotes()
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('notecard')
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = document.getElementsByTagName('p')[0].innerText;
        //console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        }

        else {
            element.style.display = 'none';
        }
    })

});

