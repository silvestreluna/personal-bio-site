import projects from './components/projects';
import logoPrinter from './components/tech';
import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  projects.initProjectsData();
  logoPrinter.techLogoPrinter();
};

init();
