import { main_dishes } from '../data/main_dishes';
import { NextApiRequest ,NextApiResponse} from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
      const {main_dishesId} = req.query
      const resoult = main_dishes.find(resoult => resoult.id == Number(main_dishesId) )
      res.status(200).json(resoult)
  }