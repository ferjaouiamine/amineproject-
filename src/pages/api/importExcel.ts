import { NextApiRequest, NextApiResponse } from 'next';
import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.resolve('.', 'data.xlsx');

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Fichier Excel non trouvé' });
    }

    const file = fs.readFileSync(filePath);
    const workbook = XLSX.read(file, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    console.log('Données brutes:', data);  // Affichez les données extraites du fichier Excel

    if (!Array.isArray(data)) {
      return res.status(500).json({ error: 'Les données renvoyées ne sont pas un tableau' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier Excel:', error);
    res.status(500).json({ error: 'Erreur lors de la lecture du fichier Excel' });
  }
}
