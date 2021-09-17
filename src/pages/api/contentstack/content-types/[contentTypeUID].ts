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

    if (response.status !== 200) {
      throw new String('Something went wrong')
    }
    res.status(200).json(response.data.content_type)
  } catch (error) {
    res.status(500).json({ message: error ?? 'Something went wrong' })
  }
}

export default contentTypeUIDHandler
