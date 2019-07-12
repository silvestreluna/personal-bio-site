import util from '../helpers/util';
import gitLogo from '../../../img/logos/git.svg';
import gitHubLogo from '../../../img/logos/github.svg';
import html5Logo from '../../../img/logos/html5.svg';
import jsLogo from '../../../img/logos/js.svg';
import reactLogo from '../../../img/logos/reactJs.svg';
import sassLogo from '../../../img/logos/sass.svg';
import jira from '../../../img/logos/jira.png';


const techLogoPrinter = () => {
  const itemToPrint = `
  <div class="row">
  <div>
    <img src=${gitLogo} class="techLogo"/>
  </div>
  <div>
    <img src=${gitHubLogo} class="techLogo" />
  </div>
  <div>
    <img src=${html5Logo} class="techLogo" />
  </div>
  <div>
    <img src=${sassLogo} class="techLogo" />
  </div>
  <div>
    <img src=${jsLogo} class="techLogo" />
  </div>
  <div>
    <img src=${reactLogo} class="techLogo" />
  </div>
  <div>
  <img src=${jira} class="techLogo" />
 </div>
  </div>
  `;
  util.printToDom('tech-logos', itemToPrint);
};

export default { techLogoPrinter };
