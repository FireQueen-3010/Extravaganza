export default function NormalButton(props) {
  const dark = props.theme;
  const text = props.text;
  const link = props.link;
  const clr = props.clr;
  return (
    <div className={`btn ${dark ? "btn-dark" : "btn-light"} ${clr}`}>
      <a className={`${clr}`} href={link}>
        {text}
      </a>
    </div>
  );
}
