import FontControl from "../components/FontControl";
import EmbossedButton from "../components/EmbossedButton";

export default function PageNotFound(props) {
    const dark=props.theme
    return (
        <div className={`not-found ${dark?"not-found--dark":"not-found--light"}`}>
        <div className="not-found--pic">
        {dark?<img className="not-found--pic-dark" src="Images/NotFound-Dark.svg"></img>:<img className="not-found--pic-light" src="Images/NotFound-Light.svg"></img>}
        </div>
        <div className={"not-found--text"}>
       <FontControl
          size="bold"
          font="lato"
          theme={dark}
          type="h2"
          text="Sorry, guess you landed at the wrong place! Let us head back home?!"
          clr={dark ? "darkClr1" : "lightClr1"}
        />
        </div>
        <EmbossedButton text="Home" link="/" theme={dark}/>    
        </div>
    )
}
