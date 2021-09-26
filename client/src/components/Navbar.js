import { ReactComponent as LogoLight } from "../images/Logo-Light.svg";
import { ReactComponent as LogoDark } from "../images/Logo-Dark.svg";
import Toggle from "./ToggleTheme";
import Button from "./NormalButton";
import EmbossedButton from "./EmbossedButton";

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
        <Button text="About" link="/about" theme={dark} />
        <Button text="Feed" link="/feed" theme={dark} />
        <EmbossedButton text="Login" link="/login" theme={dark} />
        <Toggle theme={dark} handleClick={props.handleClick} />
      </div>
    </div>
  );
}
