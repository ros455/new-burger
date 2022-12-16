import { burgers } from '../data/burgers'
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
      const {burgerId} = req.query
      const resoult = burgers.find(resoult => resoult.id == Number(burgerId) )
      res.status(200).json(resoult)
  }