import { addNote } from './addNote.js'

export const createFormFunc = () => {
    const todoContainer = document.querySelector('.todo-container')
    const createNoteBtn = document.querySelector('.create-btn')

    createNoteBtn.disabled = true

    const createForm = document.createElement('form')
    createForm.classList.add('create-form')

    const createInputForm = document.createElement('input')
    createInputForm.type = 'text'
    createInputForm.classList.add('create-input')
    createInputForm.placeholder = 'Note name'
    createInputForm.required = true
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

    const createSubmitBtn = document.createElement('button')
    createSubmitBtn.type = 'submit'
    const createSubmitBtnLabel = document.createTextNode('Submit')
    createSubmitBtn.appendChild(createSubmitBtnLabel)
    createSubmitBtn.classList.add('crt-submit-btn')
    createForm.appendChild(createSubmitBtn)

    todoContainer.appendChild(createForm)

    createSubmitBtn.addEventListener('click', addNote)
}