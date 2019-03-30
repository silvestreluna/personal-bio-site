const bioButton = document.getElementById('bioButton');
const techButton = document.getElementById('techButton');
const prjButton = document.getElementById('prjButton');





const projects = [
    {
        title: "Product Cards", 
        screenshot: "https://picsum.photos/200/200", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/silvestreluna/product_cards"
      }, 
      {
          title: "project1", 
          screenshot: "https://picsum.photos/200/200", 
          description: "Somehting something something cool", 
          technologiesUsed: "HTML/CSS/JS",
          available: true, 
          url: "https://www.google.com", 
          githubUrl: "https://github.com"
          
      },
      {
        title: "Project2", 
        screenshot: "https://picsum.photos/200/200", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/silvestreluna/product_cards"
      }, 
      {
          title: "project3", 
          screenshot: "https://picsum.photos/200/200", 
          description: "Somehting something something cool", 
          technologiesUsed: "HTML/CSS/JS",
          available: true, 
          url: "https://www.google.com", 
          githubUrl: "https://github.com"
          
      },
      {
        title: "project4", 
        screenshot: "https://picsum.photos/200/200", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/silvestreluna/product_cards"
      }, 
      {
          title: "project15",
          screenshot: "https://picsum.photos/200/200", 
          description: "Somehting something something cool", 
          technologiesUsed: "HTML/CSS/JS",
          available: true, 
          url: "https://www.google.com", 
          githubUrl: "https://github.com"
          
      }
];

const printToDom = (divId, printStuff) => {
    const selectDiv =  document.getElementById(divId);
    selectDiv.innerHTML = printStuff;
};



const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            domString += `<div class="projects">`;
            domString += `<h3>${projects[i].title}</h3>`;
            domString += `<img src="${projects[i].screenshot}">`;
            domString += `<p>${projects[i].description}</p>`;
            domString += `<p>${projects[i].technologiesUsed}</p>`;
            domString += `<a href="${projects[i].url}">Link</a> <br>`;
            domString += `<a href="${projects[i].githubUrl}">GitHub</a>`;
            domString += `</div>`
        };
    
    }; 
    printToDom('projectsPage', domString);
};

const showPage =() => {
    const bioPage = document.getElementById('bioPage');
    const technologiesPage = document.getElementById('technologiesPage');
    const projectsPage = document.getElementById('projectsPage');


    if(bioPage.style.display === 'block' ) {

        bioPage.style.display = 'none';


    } else{

        bioPage.style.display = 'block';

    }
};





// Add eventListeners to buttons in the deader
 const buttonsEvent = () => {
  
    bioButton.addEventListener('click', showPage);
    techButton.addEventListener('click', showPage);

    document.getElementById('bioButton').addEventListener('click', showPage);

 };




const init = () => {
    createProjectCards();
    buttonsEvent();
};

init();