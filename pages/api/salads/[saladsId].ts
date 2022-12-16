import { salads } from '../data/salads'
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
      const {saladsId} = req.query
      const resoult = salads.find(resoult => resoult.id == Number(saladsId) )
      res.status(200).json(resoult)
  }