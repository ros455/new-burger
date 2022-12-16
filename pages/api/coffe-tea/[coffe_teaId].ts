import { coffe_tea } from '../data/coffe_tea';
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
      const {coffe_teaId} = req.query
      const resoult = coffe_tea.find(resoult => resoult.id == Number(coffe_teaId) )
      res.status(200).json(resoult)
  }