import FontControl from "./FontControl";

export default function SubTypography(props) {
  const dark = props.theme;
  return (
    <div className="subtypo">
      <div className="subtypo-1">
        <FontControl
          size="semi-bold"
          font="lato"
          theme={dark}
          type="h2"
          text="How does it work?"
          clr={dark ? "darkClr2" : "lightClr2"}
        />
      </div>
      <div className="subtypo-2">
        <FontControl
          size="regular"
          font="lato"
          theme={dark}
          type="h3"
          text="Just choose the genre and rating and we will generate a random one exclusively meant for you"
          clr={dark ? "darkClr2" : "lightClr2"}
        />
      </div>
    </div>
  );
}
