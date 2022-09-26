import Link from "next/link";
import styles from "./styles/Home.module.css"
export default function Sidenavigation(){
    return (
    <>
    <div className={styles.dashboardbox}>
    <div className={styles.dashboardbox_1}>
        <div className={styles.dashboardtitle}><h1>Welcome to FORMS!</h1></div>
    <div className={styles.card1}>
        <Link href={"/a/b/leaveapplication"}>
        <a>
        <div>Apply for leave</div>
        </a>
        </Link>
    </div>
    <div className={styles.card2}>
        <Link href={"/a/b/hardware"}>
        <a>
        <div>Hardware Requirements</div>
        </a>
        </Link>
    
    </div>
    <div  className={styles.card3}>
        <Link href={"/a/b/1psaccess"}>
        <a><div>1PS Access</div>
        </a>
        </Link>
        
        <Link href={"/a/b/1psrelease"}>
        <a><div>1PS Release</div>
        </a>
        </Link>
    </div>
    <div  className={styles.card4}>
    <Link href={"/a/b/1rsaccess"}>
        <a><div>1RS Access</div>
        </a>
        </Link>
        
        <Link href={"/a/b/1rsrelease"}>
        <a><div>1RS Release</div>
        </a>
        </Link>
        
    </div>
    <div  className={styles.card5}>

        <Link href={"/a/b/raiseaccess"}>
        <a><div> Raise Access</div>
        </a>
        </Link>
        
        <Link href={"/a/b/raiserelease"}>
        <a><div>Raise Release</div>
        </a>
        </Link>

        <Link href={"/a/b/raiseengine"}>
            <a>
        <div>Raise Engine start</div>
        </a>
        </Link>
    
    </div>
    <Link href={"https://www.google.com/maps/place/ERIC+Risk+Management+Solutions+Pvt+Limited/@12.9789702,80.2501031,15z/data=!4m5!3m4!1s0x0:0x7af4b8e87686f68c!8m2!3d12.9789468!4d80.2500963?shorturl=1"}>
    <a target={"_blank"}>
    <div  className={styles.card6}>LOCATION</div>
    </a>
    </Link>
    </div>
    </div>
    </>)
}