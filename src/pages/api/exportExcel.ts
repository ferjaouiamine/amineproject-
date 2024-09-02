import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.resolve('.', 'data.csv'); // Chemin vers le fichier CSV

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Fichier CSV non trouvé' });
    }

    const results: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.status(200).json(results); // Envoie les données au frontend
      });
  } catch (error) {
    console.error('Erreur lors de l\'importation des données:', error);
    res.status(500).json({ error: 'Erreur lors de l\'importation des données' });
  }
}
