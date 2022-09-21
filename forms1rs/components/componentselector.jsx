import Leaveapplication from "./leaveapplication";
import Hardwarerequirement from "./hardwarerequirments";
import Onepsaccess from "./onepsaccess";
import Onersaccess from "./onersaccess";
import Raiseaccess from "./raiseaccess";
import Onepsrelease from "./onepsrelease";
import Raiserelease from "./raiserelease";
import Onersrelease from "./onersrelease";
import Raiseenginestart from "./raiseenginestart";

export default function Pageselector(props){
    const newpath = props.path.split("/").pop();
    let component;
    switch (newpath) {
        case "leaveapplication":
            component = <Leaveapplication/>;
        break;


        case "hardware":
            component = <Hardwarerequirement/>;
        break;

        case "1psaccess":
            component = <Onepsaccess/>;

        break;

        case  "1rsaccess":
            component = <Onersaccess/>;
        break;


        case  "raiseaccess":
            component = <Raiseaccess/>;
        break;

        case "1psrelease":
            component = <Onepsrelease/>;

        break;

        case "1rsrelease":
            component = <Onersrelease/>;

        break;

        case "raiserelease":
            component = <Raiserelease/>;

        break;


        case "raiseengine":
            component = <Raiseenginestart/>;

        break;
    }

    return (<><h1>{component}</h1></>)
}