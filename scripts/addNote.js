import { formatDate } from './formattedDate.js'
import { countNotesByCategory } from './summary.js'

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
    let noteCategory = 'Task'

    const radioBtns = document.querySelectorAll('input[name="category"]')

    for (const radioBtn of radioBtns) {
        if (radioBtn.checked) {
            noteCategory = radioBtn.value
            break
        }
    }

    const newNote = document.createElement('li')
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('note-column-name')
    newNote.appendChild(nameDiv)
    const createdDateDiv = document.createElement('div')
    createdDateDiv.classList.add('note-column-created')
    newNote.appendChild(createdDateDiv)
    const noteCategoryDiv = document.createElement('div')
    noteCategoryDiv.classList.add('note-column-category')
    newNote.appendChild(noteCategoryDiv)
    const noteContentDiv = document.createElement('div')
    noteContentDiv.classList.add('note-column-content')
    newNote.appendChild(noteContentDiv)
    const noteDatesDiv = document.createElement('div')
    noteDatesDiv.classList.add('note-column-dates')
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

    // Remove form from the screen
    const createForm = document.querySelector('.create-form')
    createForm.classList.add('fall-form')
    createForm.addEventListener('transitionend', () => {
        createForm.remove()
    })

    const createNoteBtn = document.querySelector('.create-btn')
    createNoteBtn.disabled = false

    const editBtns = document.querySelectorAll('.edit-button')
    editBtns.forEach(btn => btn.style.pointerEvents = 'auto')
    const archiveBtns = document.querySelectorAll('.archive-button')
    archiveBtns.forEach(btn => btn.style.pointerEvents = 'auto')
    const unarchiveBtns = document.querySelectorAll('.unarchive-button')
    unarchiveBtns.forEach(btn => btn.style.pointerEvents = 'auto')
    const deleteBtns = document.querySelectorAll('.delete-button')
    deleteBtns.forEach(btn => btn.style.pointerEvents = 'auto')

    countNotesByCategory(notesDiv,'active')
}

