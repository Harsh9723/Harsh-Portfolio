import { getApps, initializeApp, cert, App } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

let app: App | undefined

export function getAdminApp() {
  if (!app) {
    const projectId = process.env.FIREBASE_PROJECT_ID
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
    // PRIVATE KEY may contain \n sequences in env; replace to actual newlines
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error("Missing Firebase Admin credentials")
    }

    app = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    })
  }
  return app
}

export function getDb() {
  const a = getApps().length ? getApps()[0]! : getAdminApp()
  return getFirestore(a)
}

