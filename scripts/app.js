import { createFormFunc } from './create-note-form.js'
import { manageNotes } from './manage-notes.js'

const createNoteBtn = document.querySelector('.create-btn')
const notesList = document.querySelector('.notes-list')
const archivedNotesList = document.querySelector('.archive-notes-list')

createNoteBtn.addEventListener('click', createFormFunc)
notesList.addEventListener('click', manageNotes)
archivedNotesList.addEventListener('click', manageNotes)












