import FontControl from "../../../components/FontControl";

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
          text="Get intelligent recommendations based on your input data | Get latest news about movies and shows | Connect with others all in one platform"
          clr={dark ? "darkClr2" : "lightClr2"}
        />
      </div>
    </div>
  );
}
