import 'bootstrap';
import '../styles/main.scss';


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
  let domString = '<div class="card-deck text-center card-container">';
  projects.forEach((project) => {
    domString += '<div class="each-card m-2">';
    domString += `<img src=${project.screenshot} />`;
    domString += `<h3 class="card-title">${project.title}</h3>`;
    domString += `<p>${project.description}</p>`;
    domString += `<p>${project.technologiesUsed}</p>`;
    domString += '</div>';
  });
  domString += '</div>';
  printToDom('projects-page', domString);
};


const init = () => {
  createProjectCards();
};

init();
