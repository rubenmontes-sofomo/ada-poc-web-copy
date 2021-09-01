import type { NextApiRequest, NextApiResponse } from 'next'
import { getResponseContentStackCDN } from '@/utils/index'

const entriesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { contentTypeUID },
  } = req
  try {
    const urlPath = `content_types/${contentTypeUID}/entries`
    const response = await getResponseContentStackCDN(urlPath)
    res.status(200).json(response.data.entries)
  } catch (err) {
    res.status(500).json({ error: 'Something is not working' })
  }
}

export default entriesHandler
