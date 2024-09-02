import cron from 'node-cron';
import axios from 'axios';

const scheduleTask = () => {
  cron.schedule('0 0 * * *', async () => { // Cette tâche s'exécute tous les jours à minuit
    try {
      await axios.get('http://localhost:3000/api/importExcel');
      console.log('Données importées avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'importation des données', error);
    }
  });
};

export default scheduleTask;
