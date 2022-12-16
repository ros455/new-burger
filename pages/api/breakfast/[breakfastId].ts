import { breakfast } from '../data/breakfast'
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
      const {breakfastId} = req.query
      const resoult = breakfast.find(resoult => resoult.id == Number(breakfastId) )
      res.status(200).json(resoult)
  }