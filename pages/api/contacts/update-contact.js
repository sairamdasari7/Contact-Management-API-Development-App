import db from '../../../lib/db';

export default async function updateContact(req, res) {
  const { id, name, email, phone, address, timezone } = req.body;

  const query = 'UPDATE contacts SET name = $1, email = $2, phone = $3, address = $4, timezone = $5 WHERE id = $6 RETURNING *';
  const values = [name, email, phone, address, timezone, id];

  const result = await db.query(query, values);

  res.status(200).json(result.rows[0]);
}
