import SignUpForm from "../../components/signUp/SignUpForm";
import "../../styles/signUp/signUp.css";

const SignUp = () => {
  return (
    <div className="d-flex pt-4 justify-content-center" id="sign-up-page">
      <section id="sign-up-form-container" className="p-4 bg-white mx-3">
        <SignUpForm />
      </section>
    </div>
  );
};

export default SignUp;