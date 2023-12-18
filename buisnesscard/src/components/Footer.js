import facebook from "./facebook.png";
import twitter from "./twitter.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";


export default function Footer(){
    return(
        <div className="footer">
            <img src={twitter} alt="twitter"/>
            <img src={facebook} alt="facebook"/>
            <img src={instagram} alt="instagram"/>
            <img src={linkedin} alt="linkedin"/>
            <img src={github} alt="github"/>
        </div>
    )
}