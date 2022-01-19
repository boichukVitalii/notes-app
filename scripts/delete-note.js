export const deleteNote = (note) => {
    note.classList.add('fall-note')
    note.addEventListener('transitionend', () => {
        note.remove()
    })
}