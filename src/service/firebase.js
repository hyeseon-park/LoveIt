import { initializeApp } from "firebase/app";

const config = {
  apiKey: process.env.REACT_APP_API_URL,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const firebaseApp = initializeApp(config);

export default firebaseApp;
