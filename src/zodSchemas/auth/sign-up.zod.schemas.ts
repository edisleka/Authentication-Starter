import { z } from 'zod'

export const signupSchema = z.object({
  email: z
    .string({
      required_error:
        'Email is required -- Custom Message - .string() - signin.tsx',
    })
    .email({
      message: 'Invalid email -- Custom Message - .email() - signin.tsx',
    }),
  password: z
    .string({
      required_error:
        'Password is required -- Custom Message - .string() - signin.tsx',
    })
    .min(8, {
      message:
        'Password must be at least 8 characters -- Custom Message - .min() - signin.tsx',
    }),
})

export type SignUpFields = z.infer<typeof signupSchema>
