import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import sequelize from '../../../src/config/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.resolve('.', 'data.csv');

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Fichier CSV non trouvé' });
    }

    const results: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', async () => {
        for (const row of results) {
          await sequelize.query(
            'INSERT INTO data_import (date, utilisateurs_actifs, ventes, revenus, nouveaux_inscrits) VALUES (?, ?, ?, ?, ?)',
            { replacements: [row.Date, row.Utilisateurs_Actifs, row.Ventes, row.Revenus, row.Nouveaux_Inscrits] }
          );
        }
        res.status(200).json({ message: 'Importation réussie' });
      })
      .on('error', (error) => {
        console.error('Erreur lors de la lecture du fichier CSV:', error);
        res.status(500).json({ error: 'Erreur lors de la lecture du fichier CSV' });
      });
  } catch (error) {
    console.error('Erreur lors de l\'importation des données:', error);
    res.status(500).json({ error: 'Erreur lors de l\'importation des données' });
  }
}
