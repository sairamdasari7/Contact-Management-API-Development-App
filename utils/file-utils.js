import csvParser from 'csv-parse';
import fs from 'fs';

export function parseCSV(filePath) {
  return new Promise((resolve, reject) => {
    const contacts = [];
    fs.createReadStream(filePath)
      .pipe(csvParser({ columns: true }))
      .on('data', (row) => {
        contacts.push(row);
      })
      .on('end', () => {
        resolve(contacts);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
