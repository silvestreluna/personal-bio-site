import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectsData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((resp) => {
      const allProjects = Object.values(resp.data);
      resolve(allProjects);
    })
    .catch(err => reject(err));
});


export default { getProjectsData };
