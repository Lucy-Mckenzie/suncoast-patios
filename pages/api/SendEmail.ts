import mailjet from 'node-mailjet'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message, number } = req.body


  if (!name || !email || !number) {
    return res.status(400).json({ error: 'Name, email, and phone number are required' })
  }

  try {
    const client = mailjet.apiConnect(
      process.env.MAILJET_API_KEY!,
      process.env.MAILJET_API_SECRET!
    );

    const response = await client.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: email, 
            Name: name,
          },
          To: [
            {
              Email: 'lucymckenzie62@gmail.com', 
              Name: 'Admin',
            },
          ],
          Subject: 'Quote Enquriy',
          HTMLPart: `
          <html>
          <head>
            <link rel="icon" href="https://suncoast-patios-4ecd1fa1b515.herokuapp.com/logos/suncoastlogo.png" type="image/png">
            <title>Quote Enquiry</title>
          </head>
          <body>
          <h1>Quote Enquiry</h1>
          <p>You've received a new enquiry from ${name}.</p>
          <p>Name: ${name}<br>Email: ${email}<br>Message: ${message}</p>
          </body>
        `,
        },
      ],
    })

    console.log('Email sent successfully:', response.body)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' })
  }
}
