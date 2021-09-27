import Form from "../components/FormControl";
import Font from "../components/FontControl";

export default function Login(props) {
  const dark = props.theme;
  return (
    <div className={`login ${dark ? "login-dark" : "login-light"}`}>
      <div className="login--box">
        <Form theme={dark} head="Login" />
      </div>
      <div className="login--third-party">
        <div className="login--third-party-1">
          <Font
            text="Sign in using"
            clr={dark ? "darkClr1" : "lightClr2"}
            type="h2"
            size="regular"
            font="lato"
          />
        </div>
        <div className="login--third-party-2">
          <button
            className={`spl-btn ${dark ? "spl-btn-dark" : "spl-btn-light"}`}
          >
            <a className="spl-btn--text">Google</a>
          </button>
        </div>
        <div className="login--third-party-3">
          <Font
            text="New here? Sign up!"
            clr={dark ? "darkClr1" : "lightFg"}
            type="link"
            link="/sign-up"
            size="regular"
            font="lato"
          />
        </div>
      </div>
    </div>
  );
}
