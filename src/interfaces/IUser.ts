export default interface IUser {
  changePassword: boolean
  properties: any[]
  admin: boolean
  allowedToChangePassword: boolean
  id: string
  username: string
  fullName: string
  email: string
  tenantDomain: string
  tenantName: string
  tenantLocale: string
  blocked: boolean
  authenticationType: string
  integration: {
    integrationName: string
  }
  _discriminator: string
}
