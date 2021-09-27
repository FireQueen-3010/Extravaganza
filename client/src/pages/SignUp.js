import Form from "../components/FormControl";
import Font from "../components/FontControl";
export default function SignUp(props) {
  const dark = props.theme;
  return (
    <div className={`sign-up ${dark ? "sign-up-dark" : "sign-up-light"}`}>
      <div className="sign-up--inside">
        <Form theme={dark} isSignup="true" head="Sign Up" />
      </div>
    </div>
  );
}
