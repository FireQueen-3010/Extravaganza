export default function FontControl(props) {
  const dark = props.theme;
  const font = props.font;
  const size = props.size;
  const type = props.type;
  const text = props.text;
  const clr = props.clr;
  var className = "reglato";

  const classname = (font, size) => {
    if (size === "regular") {
      //weight: 400
      className = font === "lato" ? "reglato" : "reglora";
    }
    if (size === "semi-bold") {
      //weight: 600
      className = font === "lato" ? "semilato" : "Semilora";
    }
    if (size === "bold") {
      //weight: 700
      className = font === "lato" ? "boldlato" : "boldlora";
    }
  };

  classname(font, size);

  return (
    <>
      {type === "h1" ? (
        <h1
          className={`font-control-h1 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h1>
      ) : type === "h2" ? (
        <h2
          className={`font-control-h2 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h2>
      ) : type === "h3" ? (
        <h3
          className={`font-control-h3 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h3>
      ) : type === "h4" ? (
        <h4
          className={`font-control-h4 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </h4>
      ) : type === "link" ? (
        <a
          href={props.link}
          className={`font-control-h4 ${
            dark ? "font-control--dark" : "font-control--light"
          } ${className} ${clr}`}
        >
          {text}
        </a>
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
