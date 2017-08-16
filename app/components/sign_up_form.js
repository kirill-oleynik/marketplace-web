import MainInput from './../components/main_input';
import MainButton from './../components/main_button';
import LogInWithSocials from './../components/log_in_with_socials';

export default () => (
  <form>
    <div className="mb-15">
      <h2 className="login-form__title">Sign Up</h2>
      <span className="d-inline-block font-14 mb-10">
        Already have an Appreview account?
        <a href="/" className="login-form__link ml-5">Log in here</a>
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
    <div className="d-flex">
      <MainInput
        name="firstname"
        label="First Name"
        hint="Enter First Name"
        className="mb-15 mr-20"
      />
      <MainInput
        name="lastname"
        label="Last Name"
        hint="Enter Last Name"
        className="mb-15"
      />
    </div>
    <MainInput
      name="password"
      label="Password"
      hint="Enter password"
      icon="eye"
      className="mb-20"
    />
    <MainButton size="lg" color="blue" className="disabled w-100 mb-10">Sign Up</MainButton>
    <p className="font-14 in-black-050 mb-20">
      By clicking Sign up, you agree to our Privacy Policy and Terms of Use
    </p>
  </form>
);
