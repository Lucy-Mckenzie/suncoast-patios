import { NextResponse } from "next/server"
import axios from "axios"

export const config = {
  runtime: 'edge',
}

export default async function POST(request: Request) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error("Missing secret key")
    return NextResponse.json({ success: false, error: "Missing secret key" })
  }

  try {
    const postData = await request.json()
    console.log("Received data:", postData)

    const { gReCaptchaToken } = postData

    const formData = new URLSearchParams({
      secret: secretKey,
      response: gReCaptchaToken,
    })

    let res
    try {
      res = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        formData,
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error)
      return NextResponse.json({ success: false, error: "reCAPTCHA verification failed" })
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
      console.log("reCAPTCHA verified with score:", res.data?.score)
      return NextResponse.json({
        success: true,
        score: res.data.score,
      })
    } else {
      console.error("reCAPTCHA failed with score:", res.data?.score)
      return NextResponse.json({ success: false })
    }
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ success: false, error: "Error processing form submission" })
  }
}
