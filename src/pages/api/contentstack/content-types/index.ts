import type { NextApiRequest, NextApiResponse } from 'next'
import { getResponseContentStackCDN } from '@/utils/index'

const contentTypeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const response = await getResponseContentStackCDN('content_types')
    res.status(200).json(response.data.content_types)
  } catch (err) {
    res.status(500).json({ error: 'Something is not working' })
  }
}

export default contentTypeHandler
