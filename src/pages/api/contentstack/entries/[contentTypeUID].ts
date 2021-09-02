import type { NextApiRequest, NextApiResponse } from 'next'
import { getResponseContentStackCDN } from '@/utils/index'

const entriesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { contentTypeUID },
  } = req
  try {
    const urlPath = `content_types/${contentTypeUID}/entries`
    const response = await getResponseContentStackCDN(urlPath)

    if (response.status !== 200) {
      throw new String(
        'There has been an error trying to fetch entires. Please try again later.'
      )
    }
    res.status(200).send(response.data.entries)
  } catch (errorMessage) {
    res.status(500).send({ message: errorMessage })
  }
}

export default entriesHandler
