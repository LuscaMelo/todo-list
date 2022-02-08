const addTaskInput = document.querySelector('.add-task-input')
const addTaskBtn = document.querySelector('.add-task-btn')

addTaskBtn.addEventListener('click', addList)
addTaskInput.addEventListener('keypress', e => {
    if ( e.which == 13 ) {
        addList()
    }
})

function addList() {
    const notCompleted = document.querySelector('.notCompleted')
    const completed = document.querySelector('.Completed')

    const newTask = document.createElement('li')
    const checkBtn = document.createElement('button')
    const delBtn = document.createElement('button')

    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    delBtn.innerHTML = '<i class="fas fa-trash"></i>'

    if(addTaskInput.value !== '') {
        newTask.textContent = addTaskInput.value;
        addTaskInput.value = ''
        notCompleted.appendChild(newTask)
        newTask.appendChild(checkBtn)
        newTask.appendChild(delBtn)
    }

    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode
        parent.remove()
        completed.appendChild(parent)
        checkBtn.style.display = 'none'
    })

    delBtn.addEventListener('click', function () {
        const parent = this.parentNode
        parent.remove()
    })

}