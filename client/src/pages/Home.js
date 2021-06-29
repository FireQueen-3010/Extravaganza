import Typography from "../components/Typography";
import SubTypography from "../components/SubTypography";

export default function Home(props) {
    const dark = props.theme
    return (
        <div className={dark?"home-dark":"home-light"}>
        <Typography theme={dark}/> 
        <SubTypography theme={dark}/> 
        </div>
    )
}
