import { countNotesByCategory } from '../summary-table/summary.js';

export const init = (arr, i) => {

    const notesDiv = document.createElement('div')
    notesDiv.classList.add('notes')

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

    nameDiv.innerText = arr[i][0]
    createdDateDiv.innerText = arr[i][1]
    noteCategoryDiv.innerText = arr[i][2]
    noteContentDiv.innerText = arr[i][3]
    noteDatesDiv.innerText = arr[i][4]

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


    countNotesByCategory(notesDiv,'active')
}