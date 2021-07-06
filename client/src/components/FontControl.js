export default function FontControl(props) {
  const dark = props.theme;
  const font = props.font;
  const size = props.size;
  const type = props.type;
  const text = props.text;
  const clr = props.clr;
  var className = "RegLato";

  const classname = (font, size) => {
    if (size == "regular") {
      //weight: 400
      className = font == "lato" ? "RegLato" : "Reglora";
    }
    if (size == "semi-bold") {
      //weight: 600
      className = font == "lato" ? "SemiLato" : "Semilora";
    }
    if (size == "bold") {
      //weight: 700
      className = font == "lato" ? "BoldLato" : "Boldlora";
    }
  };

  classname(font, size);

  return (
    <>
      {type == "h1" ? (
        <h1
          className={`font-control-h1 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h1>
      ) : type == "h2" ? (
        <h2
          className={`font-control-h2 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h2>
      ) : type == "h3" ? (
        <h3
          className={`font-control-h3 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h3>
      ) : type == "h4" ? (
        <h4
          className={`font-control-h4 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h4>
      ) : (
        <p
          className={`font-control-p ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </p>
      )}
    </>
  );
}
