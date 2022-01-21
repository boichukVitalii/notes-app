import { formatDate } from './formattedDate.js'
import { countNotesByCategory } from './summary.js';

export const editNote = (event, note) => {
    event.preventDefault()

    countNotesByCategory(note,'active', false, true)

    const noteName = document.querySelector('.create-input').value
    const noteContent = document.querySelector('.create-textarea').value
    const noteDates = noteContent.match(/\d{1,2}[ :/]+\d{1,2}[ :/]+(\d{4}|\d{2})/g)
    const radioBtns = document.querySelectorAll('input[name="category"]')
    let noteCategory = null

    for (const radioBtn of radioBtns) {
        if (radioBtn.checked) {
            noteCategory = radioBtn.value
            break
        }
    }

    const date = new Date()

    // Note edit date
    const createdDate = formatDate('en-UA', date)

    note.childNodes[0].childNodes[0].innerText = noteName
    note.childNodes[0].childNodes[1].innerText = createdDate
    note.childNodes[0].childNodes[2].innerText = noteCategory
    note.childNodes[0].childNodes[3].innerText = noteContent
    note.childNodes[0].childNodes[4].innerText = noteDates

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

    countNotesByCategory(note,'active')
}