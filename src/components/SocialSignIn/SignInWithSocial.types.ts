type OAuthProvider =
  | 'facebook'
  | 'google'
  | 'hubspot'
  | 'github'
  | 'tiktok'
  | 'gitlab'
  | 'discord'
  | 'twitter'
  | 'twitch'
  | 'linkedin'
  | 'linkedin_oidc'
  | 'dropbox'
  | 'atlassian'
  | 'bitbucket'
  | 'microsoft'
  | 'notion'
  | 'apple'
  | 'line'
  | 'instagram'
  | 'coinbase'
  | 'spotify'
  | 'xero'
  | 'box'
  | 'slack'
  | 'linear'
  | 'x'
  | 'huggingface'
  | `custom_${string}`

export type OAuthStrategy = `oauth_${OAuthProvider}`
export type Social = OAuthProvider

export interface SignInWithSocialProps {
  provider: OAuthStrategy
  social: Social
  className?: string
  textClassName?: string
}
