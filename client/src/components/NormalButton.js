export default function NormalButton(props) {
  const dark = props.theme;
  const text = props.text;
  const link = props.link;
  return (
    <div className={`btn ${dark ? "btn-dark" : "btn-light"}`}>
      <a href={link}>{text}</a>
    </div>
  );
}


