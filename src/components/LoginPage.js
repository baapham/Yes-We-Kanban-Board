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
  const loadAnonLogin = () => {
    document.getElementById('login-loader').className =
      'loader__image';
    startAnonLogin();
  };
  return (
    <div>
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Yes We Kanban Board</h1>
          <button onClick={loadAnonLogin} className="login-button">
            <img src="/images/lock.svg" alt="anonymous" />
            <p className="login-button-title">Login Anonymously</p>
          </button>
          <button onClick={startGoogleLogin} className="login-button">
            <img src="/images/google.svg" alt="google" />
            <p className="login-button-title">Login with Google</p>
          </button>
          <button onClick={startGithubLogin} className="login-button">
            <img src="/images/github.svg" alt="github" />
            <p className="login-button-title">Login with Github</p>
          </button>
        </div>
        <div className="loader">
          <img
            id="login-loader"
            className="loader__image-hidden"
            src="/images/loader.svg"
            alt="loader"
          />
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startAnonLogin: () => dispatch(startAnonLogin()),
  startGithubLogin: () => dispatch(startGithubLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
