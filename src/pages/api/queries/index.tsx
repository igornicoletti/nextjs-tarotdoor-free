import { NextApiResponse, NextApiRequest } from 'next'

import { QueriesPainelData } from '../../../data/queries'
import { QueriesPainelProps } from '../../../interfaces/queries'

type ResponseError = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<QueriesPainelProps[] | ResponseError>) {
  try {
    const data = await QueriesPainelData
    return res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
