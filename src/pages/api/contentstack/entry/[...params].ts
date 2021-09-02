import type { NextApiRequest, NextApiResponse } from 'next'
import { getResponseContentStackCDN } from '@/utils/index'

const entryHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { params } = req.query
  const [content_type_uid, entry_uid]: any = params

  try {
    const urlPath = `content_types/${content_type_uid}/entries/${entry_uid}`
    const response = await getResponseContentStackCDN(urlPath)

    if (response.status !== 200) {
      throw new String('Something went wrong')
    }
    res.status(200).json(response.data.entry)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export default entryHandler
