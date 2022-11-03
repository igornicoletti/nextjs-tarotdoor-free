import { NextApiResponse, NextApiRequest } from 'next'

type ResponseError = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseError>) {
  try {
    const data = await req.body
    return res.status(201).json({ ...data })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
