import { useState } from "react";

export const Instamart = ({ description, title, isvisible, setIsvisible, setNotvisible }) => {
    return (
        <>
            <div className="border-2 border-black m-4">
                <h1>{title}</h1>
                {
                    isvisible ?
                        (<button className="border-2 border-black m-4" onClick={() => { setNotvisible(); }} >hide</button>) :
                        (<button className="border-2 border-black m-4" onClick={() => { setIsvisible(); }} >show</button>)
                }
                {isvisible && <p>{description}</p>}
            </div>
        </>
    );
};

export const Help = () => {
    const [config, setConfig] = useState("about");

    return (
        <>
            <Instamart
                isvisible={config === "about"}
                setIsvisible={() => setConfig("about")}
                setNotvisible={() => setConfig("j")}
                title={"about instamart"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <Instamart
                isvisible={config === "team"}
                setIsvisible={() => setConfig("team")}
                setNotvisible={() => setConfig("k")}
                title={"team instamart"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <Instamart
                isvisible={config === "carrer"}
                setIsvisible={() => setConfig("carrer")}
                setNotvisible={() => setConfig("k")}
                title={"career instamart"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
        </>
    );
};
