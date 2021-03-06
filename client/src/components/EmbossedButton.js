export default function EmbossedButton(props) {
  const dark = props.theme;
  const text = props.text;
  const link = props.link;
  const clr = props.clr;
  return (
    <div
      className={`embossedbtn btn ${
        dark ? "embossedbtn-dark" : "embossedbtn-light"
      } 
        ${dark ? "btn-dark" : "btn-light"} ${clr}`}
    >
      <a className={`${clr}`} href={link}>
        {text}
      </a>
    </div>
  );
}
