import { z } from 'zod'

export const verifySchema = z.object({
  code: z
    .string({
      required_error:
        'Code is required -- Custom Message - .string() - verify.tsx',
    })
    .min(6, {
      message:
        'Code must be 6 characters -- Custom Message - .min() - verify.tsx',
    }),
})

export type VerifyFields = z.infer<typeof verifySchema>
