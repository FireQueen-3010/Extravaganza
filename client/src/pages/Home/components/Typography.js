import FontControl from "../../../components/FontControl";

export default function Typography(props) {
  const dark = props.theme;
  return (
    <div className="typography">
      <div className="typography-1">
        <div className="typography-1--a">
          <FontControl
            size="bold"
            font="lato"
            theme={dark}
            type="h1"
            text="Contemplating on which movie to watch?"
            clr={dark ? "darkClr1" : "lightClr1"}
          />
        </div>
        <div className="typography-1--b">
          <FontControl
            size="regular"
            font="lora"
            theme={dark}
            type="h2"
            text="Don't worry, we got it all covered"
            clr={dark ? "darkClr1" : "lightClr1"}
          />
        </div>
      </div>
      <div className="typography-2">
        {dark ? (
          <img
            className="ambaasador-dark typography-2--img"
            src="Images/Ambassador-Dark.svg"
          ></img>
        ) : (
          <img
            className="ambaasador-light typography-2--img"
            src="Images/Ambassador-Light.svg"
          ></img>
        )}
      </div>
    </div>
  );
}
