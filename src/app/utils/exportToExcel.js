const { Sequelize } = require('sequelize');
const sequelize = require('../../config/database');

// Votre code existant pour l'exportation des données
async function exportDataToExcel() {
  const [results] = await sequelize.query("SELECT * FROM data_import");

  const worksheet = XLSX.utils.json_to_sheet(results);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

  XLSX.writeFile(workbook, "public/data.xlsx");
}

module.exports = exportDataToExcel;
