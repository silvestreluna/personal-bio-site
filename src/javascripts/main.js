import projects from './components/projects';
import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  projects.initProjectsData();
};

init();


// Initialize Firebase
// We have to something like this to initilize firebase.
// Change the item inside the () to importName.objectname
// firebase.initializeApp(firebaseConfig);
