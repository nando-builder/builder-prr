import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = req.headers['x-vercel-secret'];

  // Validate the secret
  if (secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  try {
    // Get slug from query parameter
    const slug = req.query.slug as string;
    console.log(`req:${req}`);
    console.log(`res:${res}`);
    console.log(`Slug:${slug}`);
    if (!slug) {
      return res.status(400).json({ message: 'Slug is required' });
    }

    // Revalidate the specified path
    await res.revalidate(slug);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' });
  }
}

