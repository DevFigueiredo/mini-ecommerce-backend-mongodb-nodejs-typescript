import adminFirebase from 'firebase-admin'
import 'dotenv/config'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require(process.env.FIREBASE_CREDENTIAL_SERVICE_ACCOUNT)
const admin = adminFirebase.initializeApp({
  projectId: serviceAccount.project_id,
  credential: adminFirebase.credential.cert(serviceAccount)
})

export { admin }
