import { editNote } from "./edit-note.js";
import { archiveNote } from "./archive-note.js";
import { deleteNote } from "./delete-note.js";
import { unarchiveNote } from "./unarchive-note.js";

export const manageNotes = (e) => {
    const item = e.target
    const note = item.parentElement.parentElement.parentElement

    if (item.classList[1] === 'edit-button') editNote(note)
    if (item.classList[1] === 'archive-button') archiveNote(note)
    if (item.classList[1] === 'delete-button') deleteNote(note)
    if (item.classList[1] === 'unarchive-button') unarchiveNote(note)
}