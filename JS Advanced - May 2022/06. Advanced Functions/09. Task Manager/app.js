function solve() {
    const sections = document.querySelectorAll('section');
    const sectionAddTask = sections[0];
    const sectionOpen = sections[1].querySelectorAll('div')[1];
    const sectionInProgress = sections[2].querySelectorAll('div')[1];
    const sectionFinished = sections[3].querySelectorAll('div')[1];
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', addTask);
    function addTask(e) {
        e.preventDefault();
        const [taskName, description, dueDate] = sectionAddTask.querySelectorAll('input, textarea');
        if (taskName.value === '' || description.value === '' || dueDate.value === '') {
            return;
        }
        const article = document.createElement('article');
        const header = document.createElement('h3');
        const pDesc = document.createElement('p');
        const pDueDate = document.createElement('p');
        const divBtns = document.createElement('div');
        const btnStart = document.createElement('button');
        const btnDel = document.createElement('button');
        addAtributesToElements();
        function addAtributesToElements() {
            btnStart.className = 'green';
            btnStart.textContent = 'Start';
            btnStart.addEventListener('click', modifyTask);
            btnDel.className = 'red';
            btnDel.textContent = 'Delete';
            btnDel.addEventListener('click', modifyTask, true);
            divBtns.className = 'flex';
            divBtns.appendChild(btnStart);
            divBtns.appendChild(btnDel);
            header.textContent = taskName.value;
            pDesc.textContent = `Description: ${description.value}`;
            pDueDate.textContent = `Due Date: ${dueDate.value}`;
            article.appendChild(header);
            article.appendChild(pDesc);
            article.appendChild(pDueDate);
            article.appendChild(divBtns);
            sectionOpen.appendChild(article);
            taskName.value = '';
            description.value = '';
            dueDate.value = '';
        }
        function modifyTask(e) {
            let article = e.target.parentElement.parentElement;
            if (article.parentElement === sectionOpen) {
                if (e.target.textContent === 'Delete') {
                    article.remove();
                    return;
                } else {
                    const btnFinish = document.createElement('button');
                    btnFinish.className = 'orange';
                    btnFinish.addEventListener('click', modifyTask);
                    btnFinish.textContent = 'Finish';
                    divBtns.appendChild(btnFinish);
                    sectionInProgress.appendChild(article);
                    btnStart.remove();
                    return;
                }
            }
            if (article.parentElement === sectionInProgress) {
                if (e.target.textContent === 'Delete') {
                    article.remove();
                    return;
                } else {
                    sectionFinished.appendChild(article);
                    divBtns.remove();
                    return;
                }
            };
        }
    }
}