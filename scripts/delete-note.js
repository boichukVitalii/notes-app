import { countNotesByCategory } from "./summary.js";

export const deleteNote = (note) => {
    if (note.parentElement.className === 'archive-notes-list') {
        countNotesByCategory(note, null, true)
    } else {
        countNotesByCategory(note, 'archived', true)
    }

    note.classList.add('fall-note')
    note.addEventListener('transitionend', () => {
        note.remove()
    })
}