import { NextApiResponse, NextApiRequest } from 'next'

import { GamesData } from '../../../../data/games'
import { GamesProps } from '../../../../interfaces/games'

type ResponseError = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<GamesProps | ResponseError>) {
  try {
    const { gamesId } = await req.query
    const data = await GamesData.find(g => g.gamesId === gamesId)
    if (data) res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
