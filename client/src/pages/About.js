import FontControl from "../components/FontControl";

export default function About(props) {
  const dark = props.theme;
  return (
    <div className={`about ${dark ? "about-dark" : "about-light"}`}>
      <div className="about-text">
     <div className="about-text--1">
      <FontControl
          size="regular"
          font="lato"
          theme={dark}
          type="h1"
          text="Welcome to Extravaganza!"
          clr={dark ? "darkClr2" : "lightClr2"}
        />
        </div>
        <div className="about-text--2">
        <FontControl
          size="regular"
          font="lato"
          theme={dark}
          type="h2"
          text="Extravaganza aims to make the user’s entertainment time simpler, anti-hectic and productive as well. Instead of pondering, browsing and following an endless loop of Google searches on what to watch and where to watch, it provides you a simple solution : select the area you are searching;"
          clr={dark ? "darkClr1" : "lightFg"}
        />
        </div>
        <div className="about-text--3">
         <FontControl
          size="regular"
          font="lato"
          theme={dark}
          type="h2"
          text="1) A web series or a movie? 
          2) Genre?
          3) Rating?
          Answers are scrapped out for you from the web and displayed along with the place on the website where you can watch the same. 
          
          We are not going to stop here; we are going to add more features to the extent that you won’t believe life could be simpler! Wait to be surprised!
          "
          clr={dark ? "darkClr1" : "lightFg"}
        />
        </div>
        <div className="about-text--4">
         <FontControl
          size="regular"
          font="lora"
          theme={dark}
          type="h2"
          text="We are not going to stop here; we are going to add more features to the extent that you won’t believe life could be simpler! Wait to be surprised!"
          clr={dark ? "darkClr2" : "lightClr2"}
        />
        </div>
      </div>
    </div>
  );
}
