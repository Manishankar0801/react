import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            {/* <User name={"Mani (function)"}/> */}
            <UserClass name={"Mani (class)"}/>
        </div>
    )
}

export default About;