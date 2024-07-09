document.querySelector('.add__task').addEventListener('click', function() {
    // Check if there is already an active input
    if (document.querySelector('.tasks-list input[type="text"]')) {
        return;
    }

    // Create a new li element
    const newTaskItem = document.createElement('li');
    newTaskItem.classList.add('task-item');

    // Create the left div containing the checkbox and input
    const taskItemLeft = document.createElement('div');
    taskItemLeft.classList.add('task-item-left');

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'task-' + (document.querySelectorAll('.task-item').length);
    newCheckbox.name = 'interest';
    newCheckbox.value = 'task';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'New Task';
    newInput.classList.add('task-input');

    taskItemLeft.appendChild(newCheckbox);
    taskItemLeft.appendChild(newInput);

    // Create the delete image
    const deleteImg = document.createElement('img');
    deleteImg.src = './images/bin.png';
    deleteImg.alt = 'delete';

    // Append the left div and the image to the li
    newTaskItem.appendChild(taskItemLeft);
    newTaskItem.appendChild(deleteImg);

    // Append the new li to the ul
    document.querySelector('.tasks-list').appendChild(newTaskItem);

    // Handle the input event
    newInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && newInput.value.trim() !== '') {
            const newLabel = document.createElement('label');
            newLabel.htmlFor = newCheckbox.id;
            newLabel.textContent = newInput.value;

            taskItemLeft.replaceChild(newLabel, newInput);
        }
    });

    // Handle the delete image click event
    deleteImg.addEventListener('click', function() {
        newTaskItem.remove();
    });
});
