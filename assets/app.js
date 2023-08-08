window.onload = function() {
    const projectContainer = document.querySelector('#project-container');

    for (let i = 0; i < 8; i++) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const colorColumn = document.createElement('div');
        colorColumn.classList.add('color-column');
        projectCard.appendChild(colorColumn);

        const title = document.createElement('h1');
        title.textContent = 'Project Title';
        projectCard.appendChild(title);

        const descriptionContainer = document.createElement('div');
        const description = document.createElement('p');
        description.textContent = 'Project Description';
        descriptionContainer.appendChild(description);
        projectCard.appendChild(descriptionContainer);

        const projectIcons = document.createElement('div');
        projectIcons.classList.add('project-icons');
        projectCard.appendChild(projectIcons);

        projectContainer.appendChild(projectCard);
    }
}
