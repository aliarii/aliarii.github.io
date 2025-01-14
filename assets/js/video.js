const videoProjects = [
    {
        "title": "Auction App",
        "category": "Nodejs, Websocket, React, TailwindCss, MongoDB Atlas",
        "source": "./assets/video/actn_demo.mp4",
        "type": "video/mp4",
        "url": "https://aliarii.github.io/auction-frontend/",
    },
    {
        "title": "Cafe Management System",
        "category": "Java, Spring Boot, Javascript, React, TailwindCss, MySQL, Docker",
        "source": "./assets/video/mngmnt_demo.mp4",
        "type": "video/mp4",
        "url": "https://aliarii.github.io/adisyon-frontend/",
    },

]
const videoProjectList = document.getElementById('project-video-list');

videoProjects.forEach(project => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <video class="project-video" controls>
            <source src="${project.source}" type="${project.type}">
                Your browser does not support the video tag.
        </video>
        <a class="project-live-demo" href="${project.url}">Click here to see live demo</a>
        </br>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
    `;
    videoProjectList.appendChild(listItem);
});