export const dev = window.location.origin.includes('localhost')
export const devCodespace = window.location.origin.includes('github.dev')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'dev-82py0l5jt61zn10o.us.auth0.com'
export const clientId = 'hykoUyNDCrsovYQXXUKObg3y1Iw4UhUS'
export const audience = 'http://sandbox.com'

export const emailConfig = {
  serviceId: 'service_3eltul8',
  templateId: 'template_4x4jmzi',
  userId: '6DHqwo97SmXhDEy-v',
  myName: 'Anthony',
  myEmail: 'wanderwithme1988@gmail.com'
}