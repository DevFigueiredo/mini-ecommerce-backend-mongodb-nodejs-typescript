import admin from 'firebase-admin'
import 'dotenv/config'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require(process.env.FIREBASE_CREDENTIAL_SERVICE_ACCOUNT)
const firebaseAdmin = admin.initializeApp({
  projectId: serviceAccount.project_id,
  credential: admin.credential.cert(serviceAccount)
})

export { firebaseAdmin }
