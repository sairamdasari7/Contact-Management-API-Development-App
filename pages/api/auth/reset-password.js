import bcrypt from 'bcrypt';
import db from '../../../lib/db';

export default async function resetPassword(req, res) {
  const { email, newPassword } = req.body;

  // Check if user exists
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = result.rows[0];
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update password in database
  await db.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);

  res.status(200).json({ message: 'Password reset successful' });
}
