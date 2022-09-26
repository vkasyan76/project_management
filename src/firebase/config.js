import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCcZrZ8jhXtOlsfQcwm-FGb35L0VCcZQvo',
    authDomain: 'projectmanagement-7d48e.firebaseapp.com',
    projectId: 'projectmanagement-7d48e',
    storageBucket: 'projectmanagement-7d48e.appspot.com',
    messagingSenderId: '611536978650',
    appId: '1:611536978650:web:08dc0938a84aa6e8171be3',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }