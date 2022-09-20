import Link from "next/link";


export default function Sidenavigation(){
    return (<div><h1>Navigate</h1>
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
    <ul>LOCATION</ul>
    </div>)
}