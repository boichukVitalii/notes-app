import { formatDate } from './formattedDate.js'

export const addNote = event => {
    event.preventDefault()

    const date = new Date()

    // Note creation date
    const createdDate = formatDate('en-UA', date)

    // Div which contains all notes
    const notesDiv = document.createElement('div')
    notesDiv.classList.add('notes')

    const noteName = document.querySelector('.create-input').value
    const noteContent = document.querySelector('.create-textarea').value
    const noteDates = noteContent.match(/\d{1,2}[ :/]+\d{1,2}[ :/]+(\d{4}|\d{2})/g)
    let noteCategory = null

    const radioBtns = document.querySelectorAll('input[name="category"]')

    for (const radioBtn of radioBtns) {
        if (radioBtn.checked) {
            noteCategory = radioBtn.value
            break
        }
    }

    const newNote = document.createElement('li')
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('note-columns')
    newNote.appendChild(nameDiv)
    const createdDateDiv = document.createElement('div')
    createdDateDiv.classList.add('note-columns')
    newNote.appendChild(createdDateDiv)
    const noteCategoryDiv = document.createElement('div')
    noteCategoryDiv.classList.add('note-columns')
    newNote.appendChild(noteCategoryDiv)
    const noteContentDiv = document.createElement('div')
    noteContentDiv.classList.add('note-columns')
    newNote.appendChild(noteContentDiv)
    const noteDatesDiv = document.createElement('div')
    noteDatesDiv.classList.add('note-columns')
    newNote.appendChild(noteDatesDiv)

    nameDiv.innerText = noteName
    createdDateDiv.innerText = createdDate
    noteCategoryDiv.innerText = noteCategory
    noteContentDiv.innerText = noteContent
    noteDatesDiv.innerText = noteDates

    newNote.classList.add('note-item')
    notesDiv.appendChild(newNote)

    //Creating buttons for editing, archiving and deleting notes
    const buttonsPanel = document.createElement('div')
    buttonsPanel.classList.add('button-panel')
    newNote.appendChild(buttonsPanel)

    const editBtn = document.createElement('span')
    editBtn.classList.add('material-icons')
    editBtn.classList.add('edit-button')
    editBtn.innerText = 'edit'
    buttonsPanel.appendChild(editBtn)

    const archiveBtn = document.createElement('span')
    archiveBtn.classList.add('material-icons')
    archiveBtn.classList.add('archive-button')
    archiveBtn.innerText = 'archive'
    buttonsPanel.appendChild(archiveBtn)

    const deleteBtn = document.createElement('span')
    deleteBtn.classList.add('material-icons')
    deleteBtn.classList.add('delete-button')
    deleteBtn.innerText = 'delete'
    buttonsPanel.appendChild(deleteBtn)

    //Append to ul list (.'notes-list')
    const notesList = document.querySelector('.notes-list')
    notesList.appendChild(notesDiv)

    const createForm = document.querySelector('.create-form')
    createForm.classList.add('fall-form')
    createForm.addEventListener('transitionend', () => {
        createForm.remove()
    })

    const createNoteBtn = document.querySelector('.create-btn')
    createNoteBtn.disabled = false
}

