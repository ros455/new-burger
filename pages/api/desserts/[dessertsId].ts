import { desserts } from '../data/desserts'
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
      const {dessertsId} = req.query
      const resoult = desserts.find(resoult => resoult.id == Number(dessertsId) )
      res.status(200).json(resoult)
  }