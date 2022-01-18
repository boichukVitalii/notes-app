import { createFormFunc } from './create-note-form.js'
import { deleteNote } from './delete-note'

const createNoteBtn = document.querySelector('.create-btn')
const deleteNoteBtn = document.querySelector('.delete-button')

createNoteBtn.addEventListener('click', createFormFunc)

deleteNoteBtn.addEventListener('click', deleteNote)








