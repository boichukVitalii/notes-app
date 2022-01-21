import { addNote } from './addNote.js'
import { editNote } from '../managment/edit-note.js'

export const createFormFunc = (e, note) => {
    const todoContainer = document.querySelector('.todo-container')
    const createNoteBtn = document.querySelector('.create-btn')

    createNoteBtn.disabled = true

    try {
        const editBtns = document.querySelectorAll('.edit-button')
        editBtns.forEach(btn => btn.style.pointerEvents = 'none')
        const archiveBtns = document.querySelectorAll('.archive-button')
        archiveBtns.forEach(btn => btn.style.pointerEvents = 'none')
        const unarchiveBtns = document.querySelectorAll('.unarchive-button')
        unarchiveBtns.forEach(btn => btn.style.pointerEvents = 'none')
        const deleteBtns = document.querySelectorAll('.delete-button')
        deleteBtns.forEach(btn => btn.style.pointerEvents = 'none')
    }
    catch (ex) {}

    const createForm = document.createElement('form')
    createForm.classList.add('create-form')

    const createInputForm = document.createElement('input')
    createInputForm.type = 'text'
    createInputForm.classList.add('create-input')
    createInputForm.placeholder = 'Note name'
    createInputForm.required = true

    if (note) createInputForm.value = note.childNodes[0].childNodes[0].innerText
    createForm.appendChild(createInputForm)

    const createRadioDiv = document.createElement('div')
    createRadioDiv.classList.add('create-radio')
    createForm.appendChild(createRadioDiv)

    const createTaskDiv = document.createElement('div')
    createTaskDiv.classList.add('create-task-div')

    const createTaskRadioBtn = document.createElement('input')
    createTaskRadioBtn.type = 'radio'
    createTaskRadioBtn.id = 'task'
    createTaskRadioBtn.name = 'category'
    createTaskRadioBtn.value = 'Task'
    createTaskDiv.appendChild(createTaskRadioBtn)
    createRadioDiv.appendChild(createTaskDiv)

    const createTaskLabel = document.createElement('label')
    createTaskLabel.htmlFor = 'task'
    const taskDescription = document.createTextNode('Task')
    createTaskLabel.appendChild(taskDescription)
    createTaskDiv.appendChild(createTaskLabel)
    createRadioDiv.appendChild(createTaskDiv)

    const createRandomThoughtDiv = document.createElement('div')
    createRandomThoughtDiv.classList.add('create-randomThought-div')

    const createRandomThoughtRadioBtn = document.createElement('input')
    createRandomThoughtRadioBtn.type = 'radio'
    createRandomThoughtRadioBtn.id = 'randomThought'
    createRandomThoughtRadioBtn.name = 'category'
    createRandomThoughtRadioBtn.value = 'Random Thought'
    createRandomThoughtDiv.appendChild(createRandomThoughtRadioBtn)
    createRadioDiv.appendChild(createRandomThoughtDiv)

    const createRandomThoughtLabel = document.createElement('label')
    createRandomThoughtLabel.htmlFor = 'randomThought'
    const randomThoughtDescription = document.createTextNode('Random Thought')
    createRandomThoughtLabel.appendChild(randomThoughtDescription)
    createRandomThoughtDiv.appendChild(createRandomThoughtLabel)
    createRadioDiv.appendChild(createRandomThoughtDiv)

    const createIdeaDiv = document.createElement('div')
    createIdeaDiv.classList.add('create-idea-div')

    const createIdeaRadioBtn = document.createElement('input')
    createIdeaRadioBtn.type = 'radio'
    createIdeaRadioBtn.id = 'idea'
    createIdeaRadioBtn.name = 'category'
    createIdeaRadioBtn.value = 'Idea'
    createIdeaDiv.appendChild(createIdeaRadioBtn)
    createRadioDiv.appendChild(createIdeaDiv)

    const createIdeaLabel = document.createElement('label')
    createIdeaLabel.htmlFor = 'idea'
    const ideaDescription = document.createTextNode('Idea')
    createIdeaLabel.appendChild(ideaDescription)
    createIdeaDiv.appendChild(createIdeaLabel)
    createRadioDiv.appendChild(createIdeaDiv)
    createForm.appendChild(createRadioDiv)

    const createTextarea = document.createElement('textarea')
    createTextarea.id = 'content'
    createTextarea.name = 'content'
    createTextarea.placeholder = 'Content'
    createTextarea.required = true
    createTextarea.classList.add('create-textarea')
    createForm.appendChild(createTextarea)

    if (note) createTextarea.value = note.childNodes[0].childNodes[3].innerText

    const createSubmitBtn = document.createElement('button')
    createSubmitBtn.type = 'submit'
    const createSubmitBtnLabel = document.createTextNode('Submit')
    createSubmitBtn.appendChild(createSubmitBtnLabel)
    createSubmitBtn.classList.add('crt-submit-btn')
    createForm.appendChild(createSubmitBtn)

    todoContainer.appendChild(createForm)

    if (note) {
        try {
            const radioBtns = document.querySelectorAll('input[name="category"]')
            const catName = note.childNodes[0].childNodes[2].innerText
            const button = Object.values(radioBtns).filter(btn => btn.value === catName)
            button[0].checked = true
        }
        catch (ex) {} // No category choosen.
    }

    if (note) {
        createSubmitBtn.addEventListener('click', event => { editNote(event, note) })
    } else {
        createSubmitBtn.addEventListener('click', addNote)
    }
}