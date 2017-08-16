import MainInput from './../components/main_input';
import MainButton from './../components/main_button';
import LogInWithSocials from './../components/log_in_with_socials';
import MainCheckbox from './../components/main_checkbox';

export default () => (
  <form className="login-form">
    <div className="mb-15">
      <h2 className="login-form__title">Log In</h2>
      <span className="d-inline-block font-14 mb-10">
        New to Appreview?
        <a href="/" className="login-form__link ml-5">Create an account</a>
      </span>
      <LogInWithSocials type="button" className="w-100 mb-20" />
      <div className="d-flex align-items-center justify-content-between mb-10">
        <div className="login-form__divider divider divider--dark" />
        <span className="font-14 mr-20 ml-20">or</span>
        <div className="login-form__divider divider divider--dark" />
      </div>
    </div>
    <MainInput
      name="email"
      label="Email"
      hint="Enter email"
      className="mb-15"
    />
    <MainInput
      name="password"
      label="Password"
      hint="Enter password"
      icon="eye"
      className="mb-20"
    />
    <MainButton size="lg" color="blue" className="disabled w-100 mb-20">Log In</MainButton>
    <div className="login-form__info-wrap mb-20">
      <a href="/" className="login-form__link mb-20">Forgot password?</a>
      <MainCheckbox
        name="keep me logged in"
        text="Keep me logged in"
        className="mb-20"
      />
    </div>
  </form>
);
