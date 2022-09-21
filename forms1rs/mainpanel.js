import Link from "next/link";


export default function Sidenavigation(){
    return (<div><h1>Welcome to FORMS</h1>
    <ul>General
        <Link href={"/a/b/leaveapplication"}>
        <a>
        <li>Apply for leave</li>
        </a>
        </Link>
    </ul>
    <ul>Requirements
        <Link href={"/a/b/hardware"}>
        <a>
        <li>Hardware Requirements</li>
        </a>
        </Link>
    
    </ul>
    <ul>1PS
        <Link href={"/a/b/1psaccess"}>
        <a><li>Access</li>
        </a>
        </Link>
        
        <Link href={"/a/b/1psrelease"}>
        <a><li>Release</li>
        </a>
        </Link>
    </ul>
    <ul>1RS
    <Link href={"/a/b/1rsaccess"}>
        <a><li>Access</li>
        </a>
        </Link>
        
        <Link href={"/a/b/1rsrelease"}>
        <a><li>Release</li>
        </a>
        </Link>
        
    </ul>
    <ul>RAISE

        <Link href={"/a/b/raiseaccess"}>
        <a><li> Raise Access</li>
        </a>
        </Link>
        
        <Link href={"/a/b/raiserelease"}>
        <a><li>Raise Release</li>
        </a>
        </Link>

        <Link href={"/a/b/raiseengine"}>
            <a>
        <li>Raise Engine start</li>
        </a>
        </Link>
    
    </ul>
    <Link href={"https://www.google.com/maps/place/ERIC+Risk+Management+Solutions+Pvt+Limited/@12.9789702,80.2501031,15z/data=!4m5!3m4!1s0x0:0x7af4b8e87686f68c!8m2!3d12.9789468!4d80.2500963?shorturl=1"}>
    <a target={"_blank"}>
    <ul>LOCATION</ul>
    </a>
    </Link>
    </div>)
}