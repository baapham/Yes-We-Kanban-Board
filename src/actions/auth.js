import {
  firebase,
  googleAuthProvider,
  githubAuthProvider,
} from '../firebase/firebase';

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startAnonLogin = () => {
  return () => {
    return firebase.auth().signInAnonymously();
  };
};
export const startGithubLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = uid => ({
  type: 'LOGIN',
  uid,
});

export const logout = () => ({
  type: 'LOGOUT',
});
