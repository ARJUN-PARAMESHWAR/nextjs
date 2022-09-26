import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"

export default function Hardwarerequirement(){
const router = useRouter();

    return(<>
    <div className={styles.container}>
    <h1>Hardware requirement</h1>
        <div>
            <label>Name of the Employee</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>

        <div>
            <label>Mail-id</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>
        <div>
            <label>Employee-id</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>
       
        <div>
             <label>Requirement</label>
             <input type={"checkbox"}></input>
             <label>Laptop</label>
             <input type={"checkbox"}></input>
             <label>Desktop</label>
             <input type={"checkbox"}></input>
             <label>Keyboard</label>
             <input type={"checkbox"}></input>
             <label>Mouse</label>
             <input type={"checkbox"}></input>
             <label>Monitor</label>
             <label>Other</label>
             <input type={"text"}></input>
        </div>

        <div>
            <button>Submit</button>
            <button onClick={()=>{router.push("/dashboard")}}>Back</button>

        </div>
    </div></>)
}