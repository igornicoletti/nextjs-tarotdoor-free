import { NextApiResponse, NextApiRequest } from 'next'

import { NewsPainelData } from '../../../../data/news'
import { NewsPainelProps } from '../../../../interfaces/news'

type ResponseError = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<NewsPainelProps | ResponseError>) {
  try {
    const { newsId } = await req.query
    const data = await NewsPainelData.find(q => q.newsId === newsId)
    if (data) res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
