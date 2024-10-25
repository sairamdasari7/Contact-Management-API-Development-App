import bcrypt from 'bcrypt';
import db from '../../../lib/db';
import { signToken } from '../../../lib/auth';

export default async function login(req, res) {
  const { email, password } = req.body;

  // Check if user exists
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = result.rows[0];
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = signToken({ userId: user.id });

  res.status(200).json({ token });
}
