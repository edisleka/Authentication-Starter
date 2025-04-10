export const mapClerkErrorToFormField = (error: any) => {
  switch (error.meta?.paramName) {
    case 'identifier':
      return 'email'
    case 'password':
      return 'password'
    default:
      return 'root'
  }
}
