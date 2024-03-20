import { useState } from "react";
import Logo from "../src/assets/pic.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Utilis/userContext";

const Heading = () => {
    const [buttonLog, setButtonLog] = useState("false")
    const { user } = useContext(UserContext)
    return (
        <div className="flex bg-teal-300  space-x-4" >
            <img alt="logo" src={Logo}></img>
            <div className=" flex  space-x-4">
                <Link to="/"><ul>Home</ul></Link>
                <Link to="/About"><ul>ABOUT</ul></Link>
                <Link to="/Help"><ul>Contact</ul></Link>
                <ul>Login</ul>
            </div>
            <h1>{user.name}</h1>
            {
                buttonLog === "true" ? <Link to="/login"><button onClick={() => { setButtonLog("false") }}>logout</button></Link> :
                    <Link to="/login"><button onClick={() => { setButtonLog("true") }}>login</button></Link>
            }
        </div>
    )
}
export default Heading;