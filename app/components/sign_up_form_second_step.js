import MainInput from './../components/main_input';
import MainButton from './../components/main_button';

export default () => (
  <form>
    <h2 className="login-form__title text-left">Tell us a little more about yourself</h2>
    <MainInput
      name="email"
      label="Email"
      hint="Enter email"
      className="mb-15"
    />
    <MainInput
      name="organization"
      label="Organization"
      hint="Enter Organization"
      className="mb-15 mr-20"
    />
    <MainInput
      name="jobtitle"
      label="Job Title"
      hint="Enter Job Title"
      className="mb-15"
    />
    <MainInput
      name="Phone"
      label="Phone"
      hint="Enter phone"
      className="mb-20"
    />
    <div className="login-form__info-wrap text-center">
      <MainButton size="lg" color="blue" className="disabled mb-20">Continue</MainButton>
      <a href="/" className="login-form__link mb-20">Remind me later</a>
    </div>
  </form>
);
