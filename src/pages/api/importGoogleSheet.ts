import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'path/to/your-credentials.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: 'YOUR_SPREADSHEET_ID',
      range: 'Sheet1!A1:E10', // Ajustez cette plage selon votre feuille de calcul
    });

    const rows = response.data.values;

    if (rows && rows.length > 0) {
      res.status(200).json({ data: rows });
    } else {
      res.status(404).json({ error: 'No data found.' });
    }
  } catch (error) {
    console.error('Error accessing Google Sheets:', error);
    res.status(500).json({ error: 'Error accessing Google Sheets' });
  }
}
