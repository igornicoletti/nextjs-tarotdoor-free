import { NextApiResponse, NextApiRequest } from 'next'

import { PortfolioData } from '../../../../data/portfolio'
import { PortfolioProps } from '../../../../interfaces/portoflio'

type ResponseError = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<PortfolioProps | ResponseError>) {
  try {
    const { portfolioId } = await req.query
    const data = await PortfolioData.find(p => p.portfolioId === portfolioId)
    if (data) res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
