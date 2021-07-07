import FontControl from "./FontControl";

export default function Footer(props) {
  const dark = props.theme;
  return (
    <div className={`footer ${dark ? "footer-dark" : "footer-light"}`}>
      <div className="footer-inner">
        <div className="footer-inner--1">
          <FontControl
            size="semi-bold"
            font="lato"
            theme={dark}
            type="h2"
            text="Made with "
            clr={dark ? "darkClr1" : "lightClr2"}
          />
        </div>
        <div className="footer-inner--2">
          <FontControl
            size="semi-bold"
            font="lato"
            theme={dark}
            type="h2"
            text={dark ? "💜 " : "🤍 "}
            clr={dark ? "darkClr1" : "lightClr2"}
          />
        </div>
        <div className="footer-inner--3">
          <FontControl
            size="semi-bold"
            font="lato"
            theme={dark}
            type="h2"
            text="by "
            clr={dark ? "darkClr1" : "lightClr2"}
          />
        </div>
        <div className="footer-inner--4">
          <a href="https://github.com/FireQueen-3010" target="_blank" rel="noreferrer">
            <FontControl
              size="bold"
              font="lora"
              theme={dark}
              type="h2"
              text="FireQueen-3010"
              clr={dark ? "darkCr2" : "lightClr1"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
