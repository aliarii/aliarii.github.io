const projects = [
    {
        "title": "word match",
        "category": "Mobile Game",
        "link": "https://app.sensortower.com/overview/com.wordmatch.puzzle?country=JP",
        "image": "./assets/images/wm.png"
    },
    {
        "title": "royal cube",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.cubemaster.puzzle",
        "image": "./assets/images/rc.png"
    },
    {
        "title": "royal tiles",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.royal.tiles",
        "image": "./assets/images/rt.png"
    },
    {
        "title": "dig master - museum builder",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.ap.museum",
        "image": "./assets/images/dmmb.png"
    },
    {
        "title": "triple wolf - merge puzzle",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.tw.triplewolf",
        "image": "./assets/images/twmp.png"
    },
    {
        "title": "triple 2048 - merge puzzle",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.tb.tripleballs",
        "image": "./assets/images/tbmp.png"
    },
    {
        "title": "merge dig car tower",
        "category": "Mobile Game",
        "link": "https://app.sensortower.com/overview/com.fbg.mergedigcar",
        "image": "./assets/images/mdct.png"
    },
    {
        "title": "throw your dunk",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.ap.throwdunk",
        "image": "./assets/images/tyd.png"
    },
    {
        "title": "car crasher!",
        "category": "Mobile Game",
        "link": "https://app.sensortower.com/overview/com.honeycomb.carcrasher",
        "image": "./assets/images/cc.png"
    },
    {
        "title": "boxing clicker hero",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.honeycomb.boxingclicker",
        "image": "./assets/images/bch.png"
    },
    {
        "title": "idle move in",
        "category": "Mobile Game",
        "link": "https://app.sensortower.com/overview/com.idle.movein",
        "image": "./assets/images/imi.png"
    },
    {
        "title": "orbital egg factory: idle game",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.orbital.egg",
        "image": "./assets/images/orfig.png"
    },
    {
        "title": "castle fight",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.honeycomb.castlefight3d",
        "image": "./assets/images/cf.png"
    },
    {
        "title": "tiny doctor",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.fbg.tinydoctor",
        "image": "./assets/images/td.png"
    },
    {
        "title": "tiny makeup",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.honeycomb.tinymakeupsalon",
        "image": "./assets/images/tm.png"
    },
    {
        "title": "the jailor",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.honeycomb.thejailor",
        "image": "./assets/images/tj.png"
    },
    {
        "title": "basketball stack",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.honeycomb.basketballstack",
        "image": "./assets/images/bs.png"
    },
    {
        "title": "hostel",
        "category": "Mobile Game",
        "link": "https://app.sensortower.com/overview/com.IceWaffle.Hostel/",
        "image": "./assets/images/hstl.png"
    },
    {
        "title": "hair rage",
        "category": "Mobile Game",
        "link": "https://app.sensortower.com/overview/hair-rage-push-em-all/com.honeycomb.hairrage/",
        "image": "./assets/images/hr.png"
    },
    {
        "title": "build city",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.kangaroo.buildcity",
        "image": "./assets/images/bc.png"
    },
    {
        "title": "stray cat",
        "category": "Mobile Game",
        "link": "https://play.google.com/store/apps/details?id=com.fbg.straycat",
        "image": "./assets/images/sc.png"
    }
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const listItem = document.createElement('li');
    listItem.className = 'project-item active';

    listItem.innerHTML = `
        <a href="${project.link}">
            <figure class="project-img">
                <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="${project.image}" loading="lazy">
            </figure>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${project.category}</p>
        </a>
    `;
    projectList.appendChild(listItem);
});
