import multer from 'multer';
import { parseCSV } from '../../../utils/file-utils';
import db from '../../../lib/db';

const upload = multer({ dest: 'uploads/' });

export default function handler(req, res) {
  upload.single('file')(req, res, async (err) => {
    if (err) return res.status(500).json({ error: 'File upload failed' });

    const contacts = await parseCSV(req.file.path);

    // Bulk insert contacts into database
    for (const contact of contacts) {
      await db.query('INSERT INTO contacts (name, email, phone, address, timezone) VALUES ($1, $2, $3, $4, $5)', [
        contact.name,
        contact.email,
        contact.phone,
        contact.address,
        contact.timezone,
      ]);
    }

    res.status(201).json({ message: 'Contacts uploaded successfully' });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
