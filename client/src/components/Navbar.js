import { ReactComponent as LogoLight} from '../images/Logo-Light.svg';
import { ReactComponent as LogoDark} from '../images/Logo-Dark.svg';
import Button from "./NormalButton";
import EmbossedButton from "./EmbossedButton";

export default function Navbar(props) {
    const dark = props.theme;
    return (
        <div className={`navbar ${dark? "navbar-dark": "navbar-light"}`}>
          <div className="logo-box"><a href="/">{dark?<LogoDark className="logo-dark"/>:<LogoLight  className="logo-light"/>}</a></div>
          <div className="navbar-buttonbox">
          <Button text="Get Started" link="/start" theme={dark}/>
          <Button text="About" link="/about" theme={dark}/>
          <EmbossedButton text="Login" link="/login" theme={dark}/>
          </div>
        </div>

    )
}

