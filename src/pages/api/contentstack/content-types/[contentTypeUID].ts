import type { NextApiRequest, NextApiResponse } from 'next'
import { getResponseContentStackCDN } from '@/utils/index'

const contentTypeUIDHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { contentTypeUID },
  } = req
  try {
    const urlPath = `content_types/${contentTypeUID}`
    const response = await getResponseContentStackCDN(urlPath)

    res.status(200).json(response.data.content_type)
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export default contentTypeUIDHandler
