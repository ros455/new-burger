import { salads } from '../data/salads'
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(salads);
  };
}