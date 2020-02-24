import React from 'react';
import { connect } from 'react-redux';
import {
  startGoogleLogin,
  startAnonLogin,
  startGithubLogin,
} from '../actions/auth';

const LoginPage = ({
  startGoogleLogin,
  startAnonLogin,
  startGithubLogin,
}) => {
  return (
    <div>
      <button onClick={startAnonLogin}>Login Anonymously</button>
      <button onClick={startGoogleLogin}>Login with Google</button>
      <button onClick={startGithubLogin}>Login with Github</button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startAnonLogin: () => dispatch(startAnonLogin()),
  startGithubLogin: () => dispatch(startGithubLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
