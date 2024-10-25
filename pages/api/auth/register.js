import bcrypt from 'bcrypt';
import db from '../../../lib/db';
import { signToken } from '../../../lib/auth';

export default async function register(req, res) {
  const { name, email, password } = req.body;

  // Check if user exists
  const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  if (userExists.rows.length > 0) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into database
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, email, hashedPassword];
  const result = await db.query(query, values);

  // Generate JWT token
  const token = signToken({ userId: result.rows[0].id });

  res.status(201).json({ token });
}
