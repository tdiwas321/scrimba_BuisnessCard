import profilePic from "../images/profile.jpg"
import mail from "./Mail.png"
export default function Profile(){
    return(
        <div className="profile">
            <img src={profilePic} alt="profile" className="profilePic"/>
            <div className="bio">
                <span className="name">Diwas Thapa</span>
                <span className="position">Frontend Developer</span>
                <span className="webpage">diwasthapa.website</span>
            </div>
            <button>
                <img src={mail} className="mailLogo" alt="mail"/>
                Email
                </button>
        </div>
    )
}