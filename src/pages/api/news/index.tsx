import { NextApiResponse, NextApiRequest } from 'next'

import { NewsPainelData } from '../../../data/news'
import { NewsPainelProps } from '../../../interfaces/news'

type ResponseError = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<NewsPainelProps[] | ResponseError>) {
  try {
    const data = await NewsPainelData
    return res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
