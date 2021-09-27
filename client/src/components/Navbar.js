import { ReactComponent as LogoLight } from "../images/Logo-Light.svg";
import { ReactComponent as LogoDark } from "../images/Logo-Dark.svg";
import Toggle from "./ToggleTheme";
import Button from "./NormalButton";

export default function Navbar(props) {
  const dark = props.theme;
  return (
    <div className={`navbar ${dark ? "navbar-dark" : "navbar-light"}`}>
      <div
        className={`logo-box ${dark ? "logo-box--dark" : "logo-box--light"}`}
      >
        <a href="/">
          {dark ? (
            <LogoDark className="logo-dark" />
          ) : (
            <LogoLight className="logo-light" />
          )}
        </a>
      </div>
      <div className="navbar-buttonbox">
        <Button
          text="About"
          link="/about"
          theme={dark}
          clr={dark ? "darkClr2" : "lightClr1"}
        />
        <Button
          text="Feed"
          link="/feed"
          theme={dark}
          clr={dark ? "darkClr2" : "lightClr1"}
        />
        <Button
          text="Login"
          link="/login"
          theme={dark}
          clr={dark ? "darkClr2" : "lightClr1"}
        />
        <Toggle theme={dark} handleClick={props.handleClick} />
      </div>
    </div>
  );
}
