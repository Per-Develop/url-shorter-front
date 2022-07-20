import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUrlData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUrlData)) {
      throw new Error('Cannot find url data')
    }

    res.status(200).json(sampleUrlData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
