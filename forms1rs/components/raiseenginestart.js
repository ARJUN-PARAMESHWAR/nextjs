import { useRouter } from "next/router"

export default function Raiseenginestart(){
    const router = useRouter();

    return(<><div>
         <div>
            <label>Name of the Employee</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>

        <div>
            <label>Mail-id</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>

        <div>
            <span>Environment</span>
            <input type={"radio"} name={"environment"}></input>
            <label>DEV</label>
            <input type={"radio"} name={"environment"}></input>
            <label>SAT</label>
            <input type={"radio"} name={"environment"}></input>
            <label>LOCAL</label>
            <input type={"radio"} name={"environment"}></input>
            <label>UAT</label>
        </div>
        <div>
            <button>Submit</button>
            <button onClick={()=>{router.push("/dashboard")}}>Back</button>

        </div>
        </div></>)
}