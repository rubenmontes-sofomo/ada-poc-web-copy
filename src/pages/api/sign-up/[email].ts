import type { NextApiRequest, NextApiResponse } from 'next'

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const mailHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query
  try {
    const msg = {
      to: email, // Change to your recipient
      from: 'ruben.montes.mendoza@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sgMail
      .send(msg)
      .then((response: any) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error: any) => {
        console.error(error)
      })
    res.status(200).json({ status: 'Ok' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}

export default mailHandler
