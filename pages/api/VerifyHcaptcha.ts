import { verify } from 'hcaptcha'

const secretKey: string | undefined = process.env.SECRET_HCAPTCHA_KEY!

interface FormData {
  get: (key: string) => string | null;
}

export const SubmitForm = async (formData: FormData) => {
  try {
    const token = formData.get('captcha')?.toString() || null

    if (!token) {
      return { message: 'Invalid captcha', success: false }
    }

    const { success } = await verify(secretKey, token)

    if (!success) {
      return { message: 'Invalid captcha', success: false }
    }

    return { message: 'Success', success: true }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: 'Verification failed', success: false }
    } else {
      return { message: 'Verification failed', success: false }
    }
  }
}
