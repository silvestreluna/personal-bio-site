import '../styles/main.scss';

const navClasses = document.getElementsByClassName('navbar');
const bioPage = document.getElementById('bioPage');
const techPage = document.getElementById('technologiesPage');
const prjPage = document.getElementById('projectsPage');


const hidePages = () => {
  bioPage.classList.remove('d-none');
  techPage.classList.add('d-none');
  prjPage.classList.add('d-none');
};


const projects = [
  {
    title: 'Product Cards',
    screenshot: 'https://picsum.photos/200/200',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/silvestreluna/product_cards',
  },
  {
    title: 'project1',
    screenshot: 'https://picsum.photos/200/200',
    description: 'Somehting something something cool',
    technologiesUsed: 'HTML/CSS/JS',
    available: true,
    url: 'https://www.google.com',
    githubUrl: 'https://github.com',

  },
  {
    title: 'Project2',
    screenshot: 'https://picsum.photos/200/200',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/silvestreluna/product_cards',
  },
  {
    title: 'project3',
    screenshot: 'https://picsum.photos/200/200',
    description: 'Somehting something something cool',
    technologiesUsed: 'HTML/CSS/JS',
    available: true,
    url: 'https://www.google.com',
    githubUrl: 'https://github.com',

  },
  {
    title: 'project4',
    screenshot: 'https://picsum.photos/200/200',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/silvestreluna/product_cards',
  },
  {
    title: 'project15',
    screenshot: 'https://picsum.photos/200/200',
    description: 'Somehting something something cool',
    technologiesUsed: 'HTML/CSS/JS',
    available: true,
    url: 'https://www.google.com',
    githubUrl: 'https://github.com',

  },
];

const printToDom = (divId, printStuff) => {
  const selectDiv = document.getElementById(divId);
  selectDiv.innerHTML = printStuff;
};


const createProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].available === true) {
      domString += '<div class="projects">';
      domString += `<h3>${projects[i].title}</h3>`;
      domString += `<img src="${projects[i].screenshot}">`;
      domString += `<p>${projects[i].description}</p>`;
      domString += `<p>${projects[i].technologiesUsed}</p>`;
      domString += `<a href="${projects[i].url}">Link</a> </br>`;
      domString += `<a href="${projects[i].githubUrl}">GitHub</a>`;
      domString += '</div>';
    }
  }
  printToDom('projectsPage', domString);
};


const showPage = (e) => {
  const currentId = e.target.id;
  console.error(currentId);
  if (currentId === 'bioButton') {
    bioPage.classList.remove('d-none');
    prjPage.classList.add('d-none');
    techPage.classList.add('d-none');
  } else if (currentId === 'my-name') {
    bioPage.classList.remove('d-none');
    prjPage.classList.add('d-none');
    techPage.classList.add('d-none');
  } else if (currentId === 'techButton') {
    bioPage.classList.add('d-none');
    prjPage.classList.add('d-none');
    techPage.classList.remove('d-none');
  } else if (currentId === 'prjButton') {
    bioPage.classList.add('d-none');
    techPage.classList.add('d-none');
    prjPage.classList.remove('d-none');
  }
};


// Add eventListeners to buttons in the deader
const buttonsEvent = () => {
  for (let i = 0; i < navClasses.length; i += 1) {
    navClasses[i].addEventListener('click', showPage);
  }
};


const init = () => {
  hidePages();
  createProjectCards();
  buttonsEvent();
};

init();
