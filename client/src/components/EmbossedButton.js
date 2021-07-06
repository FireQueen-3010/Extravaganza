export default function EmbossedButton(props) {
  const dark = props.theme;
  const text = props.text;
  const link = props.link;
  return (
    <div
      className={`embossedbtn btn ${
        dark ? "embossedbtn-dark" : "embossedbtn-light"
      } 
        ${dark ? "btn-dark" : "btn-light"}`}
    >
      <a href={link}>{text}</a>
    </div>
  );
}
