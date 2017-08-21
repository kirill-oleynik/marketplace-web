import React from 'react';
import MainInput from './../components/main_input';
import MainButton from './../components/main_button';

export default () => (
  <form className="login-form">
    <div className="mb-20">
      <h2 className="login-form__title">Reset Password</h2>
      <p className="font-14 mb-10">
        Enter email and we’ll send you instructions to reset your password
      </p>
    </div>
    <MainInput
      name="email"
      label="Email"
      hint="Enter email"
      className="mb-20"
    />
    <div className="login-form__info-wrap text-center mb-20">
      <MainButton size="lg" color="blue" className="disabled mb-20">Reset Password</MainButton>
      <a href="/" className="login-form__link mb-20">Return to login</a>
    </div>
  </form>
);
