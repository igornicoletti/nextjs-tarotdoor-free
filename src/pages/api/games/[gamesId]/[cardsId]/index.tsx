import { NextApiResponse, NextApiRequest } from 'next'

import { CardsData } from '../../../../../data/cards'
import { CardsProps } from '../../../../../interfaces/cards'

type ResponseError = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<CardsProps | ResponseError>) {
  try {
    const { cardsId } = await req.query
    const data = await CardsData.find(c => c.cardsId === cardsId)
    if (data) res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
