import db from '../../../lib/db';
import { validateContact } from '../../../models/contact';

export default async function addContact(req, res) {
  const { error } = validateContact(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { name, email, phone, address, timezone } = req.body;
  const query = 'INSERT INTO contacts (name, email, phone, address, timezone) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [name, email, phone, address, timezone];
  const result = await db.query(query, values);

  res.status(201).json(result.rows[0]);
}
