import { countNotesByCategory } from '../summary-table/summary.js'

export const archiveNote = note => {
    const archiveNote = note
    countNotesByCategory(archiveNote, 'archived')
    const notesList = document.querySelector('.archive-notes-list')
    const removeBtn = archiveNote.childNodes[0].childNodes[5]
    const unarchiveBtn = document.createElement('span')

    note.remove()
    notesList.appendChild(archiveNote)

    // Removing edit and archive buttons
    removeBtn.removeChild(removeBtn.childNodes[0])
    removeBtn.removeChild(removeBtn.childNodes[0])

    // Adding unarchive button
    unarchiveBtn.classList.add('material-icons')
    unarchiveBtn.classList.add('unarchive-button')
    unarchiveBtn.innerText = 'unarchive'
    removeBtn.prepend(unarchiveBtn)

}