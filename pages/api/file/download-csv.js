import db from '../../../lib/db';
import { stringify } from 'csv-stringify';

export default async function handler(req, res) {
  const result = await db.query('SELECT name, email, phone, address, timezone FROM contacts');

  const contacts = result.rows;
  const csvHeaders = ['Name', 'Email', 'Phone', 'Address', 'Timezone'];

  stringify(contacts, { header: true, columns: csvHeaders }, (err, output) => {
    if (err) return res.status(500).json({ error: 'Error generating CSV' });

    res.setHeader('Content-Disposition', 'attachment; filename="contacts.csv"');
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(output);
  });
}

export const config = {
  api: {
    responseLimit: '10mb',
  },
};
