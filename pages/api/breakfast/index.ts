import { breakfast } from '../data/breakfast'
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(breakfast);
  };
}