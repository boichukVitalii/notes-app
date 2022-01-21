import { createFormFunc } from './creation/create-note-form.js'
import { manageNotes } from './managment/manage-notes.js'
import { init } from './creation/default-notes.js'

const createNoteBtn = document.querySelector('.create-btn')
const notesList = document.querySelector('.notes-list')
const archivedNotesList = document.querySelector('.archive-notes-list')

const arr = [
    ['Buy products', 'January 19, 2022', 'Task', 'Bread, milk 12/05/2022', '12/05/2022'],
    ['Evolution theory', 'January 19, 2022', 'Random Thought', 'The evolution is the change', ' '],
    ['Books', 'March 22, 2022', 'Task', 'The Lean Startup', ' '],
    ['AI', 'April 18, 2022', 'Idea', 'Gradient descent in backpropagation algorithm, date: 5/3/22 or 17:10:2022', ['5/3/22', '17:10:2022']],
    ['Plane', 'January 19, 2022', 'Idea', '12/10/2023 creation of the plane', '12/10/2023'],
    ['Alphabet', 'January 19, 2022', 'Random Thought', 'A,b,c,d,e,f,g,h,i,g,k,l...', ' '],
    ['Ice cream', 'January 19, 2022', 'Task', 'Buy any ice cream 23/1/22', '23/1/22'],
]

for (let i = 0; i < 7; i++) {
    init(arr, i)
}

createNoteBtn.addEventListener('click', createFormFunc)
notesList.addEventListener('click', manageNotes)
archivedNotesList.addEventListener('click', manageNotes)












