import { db, firebaseAuth } from './firebase'

saveUser = user => (
  db.collection('users').doc(user.uid).set({
    email: user.email,
    uid: user.uid,
    roles: {
      admin: false
    }
  }).then( () => user )
)

login = (email, password) => firebaseAuth().signInWithEmailAndPassword(email, password)

userRegister = (email, password) => firebaseAuth().createUserWithEmailAndPAssword(email, password)
  .then(credentials => saveUser(credentials.user))
  .catch( err => err.message )

resetPassword = email => firebaseAuth().sendPasswordResetEmail(email)
  .then( ()=> true )
  .catch( ()=> false )

const handleUser = {
  saveUser,
  login,
  userRegister,
  resetPassword
}

export default handleUser
