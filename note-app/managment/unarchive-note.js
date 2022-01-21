import { countNotesByCategory } from '../summary-table/summary.js'

export const unarchiveNote = note => {
    const unarchivedNote = note

    countNotesByCategory(unarchivedNote, 'active', true)

    const notesList = document.querySelector('.notes-list')
    const removeBtn = unarchivedNote.childNodes[0].childNodes[5]
    const archiveBtn = document.createElement('span')
    const editBtn = document.createElement('span')

    note.remove()
    notesList.appendChild(unarchivedNote)

    removeBtn.removeChild(removeBtn.childNodes[0])

    archiveBtn.classList.add('material-icons')
    archiveBtn.classList.add('archive-button')
    archiveBtn.innerText = 'archive'
    removeBtn.prepend(archiveBtn)

    editBtn.classList.add('material-icons')
    editBtn.classList.add('edit-button')
    editBtn.innerText = 'edit'
    removeBtn.prepend(editBtn)
}