// pages/api/revalidate.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for the secret in headers instead of the query string
  const secret = req.headers['x-vercel-secret'];

  if (secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  try {
    const slug = req.body.slug || req.query.slug;

    if (!slug) {
      return res.status(400).json({ message: 'Slug is required' });
    }

    // Revalidate the specified path
    await res.revalidate(`/${slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' });
  }
}

