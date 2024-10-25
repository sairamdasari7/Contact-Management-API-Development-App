import db from '../../../lib/db';

export default async function getContacts(req, res) {
  const { name, email, timezone } = req.query;

  let query = 'SELECT * FROM contacts WHERE 1=1';
  const values = [];

  if (name) {
    query += ' AND name ILIKE $' + (values.length + 1);
    values.push(`%${name}%`);
  }

  if (email) {
    query += ' AND email ILIKE $' + (values.length + 1);
    values.push(`%${email}%`);
  }

  if (timezone) {
    query += ' AND timezone = $' + (values.length + 1);
    values.push(timezone);
  }

  const result = await db.query(query, values);
  res.status(200).json(result.rows);
}
