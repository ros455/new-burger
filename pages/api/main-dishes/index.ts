import { main_dishes } from '../data/main_dishes';
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(main_dishes);
  };
}