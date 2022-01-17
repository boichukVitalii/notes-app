const createNoteBtn = document.querySelector('.create-btn')
const todoContainer = document.querySelector('.todo-container')

createNoteBtn.addEventListener('click', e => {
    createNoteBtn.disabled = true

    const createForm = document.createElement('form')
    createForm.classList.add('create-form')

    const createInputForm = document.createElement('input')
    createInputForm.type = 'text'
    createInputForm.classList.add('create-input')
    createInputForm.placeholder = 'Note name'
    createForm.appendChild(createInputForm)

    const createRadioDiv = document.createElement('div')
    createRadioDiv.classList.add('create-radio')
    createForm.appendChild(createRadioDiv)

    const createTaskRadioBtn = document.createElement('input')
    createTaskRadioBtn.type = 'radio'
    createTaskRadioBtn.id = 'task'
    createTaskRadioBtn.name = 'category'
    createTaskRadioBtn.value = 'Task'
    createRadioDiv.appendChild(createTaskRadioBtn)

    const createTaskLabel = document.createElement('label')
    createTaskLabel.htmlFor = 'task'
    const taskDescription = document.createTextNode('Task')
    createTaskLabel.appendChild(taskDescription)
    createRadioDiv.appendChild(createTaskLabel)


    const createRandomThoughtRadioBtn = document.createElement('input')
    createRandomThoughtRadioBtn.type = 'radio'
    createRandomThoughtRadioBtn.id = 'randomThought'
    createRandomThoughtRadioBtn.name = 'category'
    createRandomThoughtRadioBtn.value = 'Random Thought'
    createRadioDiv.appendChild(createRandomThoughtRadioBtn)

    const createRandomThoughtLabel = document.createElement('label')
    createRandomThoughtLabel.htmlFor = 'randomThought'
    const randomThoughtDescription = document.createTextNode('Random Thought')
    createRandomThoughtLabel.appendChild(randomThoughtDescription)
    createRadioDiv.appendChild(createRandomThoughtLabel)


    const createIdeaRadioBtn = document.createElement('input')
    createIdeaRadioBtn.type = 'radio'
    createIdeaRadioBtn.id = 'idea'
    createIdeaRadioBtn.name = 'category'
    createIdeaRadioBtn.value = 'Idea'
    createRadioDiv.appendChild(createIdeaRadioBtn)

    const createIdeaLabel = document.createElement('label')
    createIdeaLabel.htmlFor = 'idea'
    const ideaDescription = document.createTextNode('Idea')
    createIdeaLabel.appendChild(ideaDescription)
    createRadioDiv.appendChild(createIdeaLabel)
    createForm.appendChild(createRadioDiv)


    const createTextarea = document.createElement('textarea')
    createTextarea.id = 'content'
    createTextarea.name = 'content'
    createTextarea.placeholder = 'Content'
    createTextarea.classList.add('create-textarea')
    createForm.appendChild(createTextarea)

    const createSubmitBtn = document.createElement('button')
    createSubmitBtn.type = 'submit'
    const createSubmitBtnLabel = document.createTextNode('Submit')
    createSubmitBtn.appendChild(createSubmitBtnLabel)
    createSubmitBtn.classList.add('crt-submit-btn')
    createForm.appendChild(createSubmitBtn)


    todoContainer.appendChild(createForm)
})





