import getData from '../helpers/data/projectData';
import util from '../helpers/util';

const createProjectCards = (array) => {
  let domString = '<div class="card-deck text-center card-container">';
  array.forEach((project) => {
    domString += '<div class="each-card m-2">';
    domString += `<img class="card-img" src=${project.screenshot} />`;
    domString += `<h3 class="project-title">${project.title}</h3>`;
    domString += `<p class="project-desc">${project.description}</p>`;
    domString += '<div>';
    domString += `<a href=${project.url} target="_blank"><i class="fas fa-external-link-alt"></i></a> </br>`;
    domString += `<a href=${project.githubUrl} target="_blank"><i class="fab fa-github"></i></a>`;
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('projects-page', domString);
};

const initProjectsData = () => {
  getData.getProjectsData()
    .then((allProjects) => {
      createProjectCards(allProjects);
    })
    .catch(err => console.error('No Items', err));
};

export default { initProjectsData };
