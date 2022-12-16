import { coffe_tea } from '../data/coffe_tea';
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(coffe_tea);
  };
}