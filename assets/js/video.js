const videoProjects = [
    {
        "title": "Auction Mobile App",
        "category": "Nodejs, WebSocket, React Native, MongoDB",
        "source": "./assets/video/actnmbl_demo.mp4",
        "type": "video/mp4",
        "url": "",
        "liveDemo": '</br>'
    },
    {
        "title": "Auction App",
        "category": "Nodejs, WebSocket, React, TailwindCss, MongoDB",
        "source": "./assets/video/actn_demo.mp4",
        "type": "video/mp4",
        "url": "https://aliarii.github.io/auction-frontend/",
        "liveDemo": '<a class="project-live-demo" href="${project.url}">Click here to see live demo</a>'
    },
    {
        "title": "Cafe Management System",
        "category": "Java, Spring Boot, Javascript, React, TailwindCss, MySQL, Docker",
        "source": "./assets/video/mngmnt_demo.mp4",
        "type": "video/mp4",
        "url": "https://aliarii.github.io/adisyon-frontend/",
        "liveDemo": '<a class="project-live-demo" href="${project.url}">Click here to see live demo</a>'
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
        ${project.liveDemo}
        
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
    `;
    videoProjectList.appendChild(listItem);
});