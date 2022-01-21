export const countNotesByCategory = (note, type, unarhived = false, edit = false) => {
    const category = note.childNodes[0].childNodes[2].innerText
    let cat

    if (category.length > 4) {
        cat = category.split(' ', )[1].toLowerCase()
    } else {
        cat = category.toLowerCase()
    }

    if(!edit) {
        if (type) {
            let mode = `.${cat}-` + type
            const field = document.querySelector(mode)
            let fieldCount = field.innerText
            field.innerText = ++fieldCount
        }
    }

    if (type === 'archived' || edit) {
        const activeField = document.querySelector(`.${cat}-active`)
        let fieldValue = activeField.innerText
        activeField.innerText = --fieldValue
    }

    if (unarhived) {
        const archiveField = document.querySelector(`.${cat}-archived`)
        let fieldValue = archiveField.innerText
        archiveField.innerText = --fieldValue
    }

}