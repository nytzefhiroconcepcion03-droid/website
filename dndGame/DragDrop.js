const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.dropable');
const remarks = document.getElementById('remarks');
const scoreDisplay = document.getElementById('scores')
const resetButton = document.getElementById('reset-btn');

let score = 0;

const originalParents = new Map();
draggableElements.forEach(draggable => {
    originalParents.set(draggable, draggable.parentElement);

    draggable.addEventListener('dragstart', (e) => {
        draggable.classList.add('dragging');
        e.dataTransfer.setData('text', e.target.id);
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

draggableElements.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggable.classList.add('dragging');
        e.dataTransfer.setData('text', e.target.id);
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

droppableElements.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();

        const draggedId = e.dataTransfer.getData('text');
        const draggedCard = document.getElementById(draggedId);

        const scientistKey = draggedCard.dataset.scientist;
        const discoveryKey = dropzone.dataset.discovery;

        if (scientistKey === discoveryKey) {
            dropzone.appendChild(draggedCard);
            
            score++;
            document.getElementById('scores').innerText = score + "/ 10"  ;
            remarks.innerText = "Wow amazing";
            
        } else {
            remarks.innerText = "engkk malee";
            
        }
    });
    
});

resetButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.innerText = "0 / 10";
    remarks.innerText = "Match them";

    draggableElements.forEach(card => {
        const originalParent = originalParents.get(card);
        if (originalParent) {
            originalParent.appendChild(card);
        }
    });
});