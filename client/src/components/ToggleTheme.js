export default function ToggleTheme(props) {
  const dark = props.theme;
  return (
    <div className="toggle-theme">
      {/* <input type="checkbox" id="toggle" onChange={() => props.handleClick()}/>
          <label htmlFor="toggle">
          {dark?<img src="Images/Toggle-dark.svg"></img>
          :<img src="Images/Toggle-light.svg"></img>}
          </label> */}
      <a className="toggle-theme--a" onClick={() => props.handleClick()}>
        {dark ? (
          <img src="Images/Toggle-Dark.svg"></img>
        ) : (
          <img src="Images/Toggle-Light.svg"></img>
        )}
      </a>
    </div>
  );
}


