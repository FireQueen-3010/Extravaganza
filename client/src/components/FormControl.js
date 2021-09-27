import EmbossedButton from "./EmbossedButton";
import FontControl from "./FontControl";

export default function FormControl(props) {
  const dark = props.theme;
  return (
    <div className={`form ${dark ? "form-dark" : "form-light"}`}>
      <div className="form--head">
        <FontControl
          theme={dark}
          text={props.head}
          size="semi-bold"
          type="h2"
          font="lato"
          clr={dark ? "darkClr1" : "lightBg"}
        />
      </div>
      <form
        className={`form--inside ${
          dark ? "form--inside-dark" : "form--inside-light"
        }`}
        onSubmit=""
      >
        <label for="email" className="form--inside-label">
          <FontControl
            theme={dark}
            text="Email"
            size="semi-bold"
            type="h3"
            font="lato"
            clr={dark ? "darkClr1" : "lightBg"}
          />
        </label>
        <input
          className={`form--inside-email search--input ${
            dark ? "search--input-dark" : "search--input-light"
          }`}
          type="email"
          placeholder="Enter your email"
          id="email"
        />
        <label for="pass" className="form--inside-label">
          <FontControl
            theme={dark}
            text="Password"
            size="semi-bold"
            type="h3"
            font="lato"
            clr={dark ? "darkClr1" : "lightBg"}
          />
        </label>
        <input
          className={`form--inside-password search--input ${
            dark ? "search--input-dark" : "search--input-light"
          }`}
          type="password"
          placeholder="Password"
          id="pass"
        />
        {props.isSignup ? (
          <>
            <label for="pass" className="form--inside-label">
              <FontControl
                theme={dark}
                text="Confirm Password"
                size="semi-bold"
                type="h3"
                font="lato"
                clr={dark ? "darkClr1" : "lightBg"}
              />
            </label>
            <input
              className={`form--inside-password search--input ${
                dark ? "search--input-dark" : "search--input-light"
              }`}
              type="password"
              placeholder="Password"
              id="pass"
            />
          </>
        ) : (
          ""
        )}
        <EmbossedButton
          text="Submit"
          theme={dark}
          clr={dark ? "darkClr1" : "lightBg"}
        />
      </form>
    </div>
  );
}
