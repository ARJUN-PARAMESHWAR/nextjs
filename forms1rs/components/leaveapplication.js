import { useRouter } from "next/router"

export default function Leaveapplication(){
    const router = useRouter();
    return(<><h1>Leave approval</h1>
    <div>
        <div>
            <label>Mail-id</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>
        <div>
            <label>Employee-id</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>
        <div>
            <label>Name of the Employee</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>
        <div>
            <span>Type of leave</span>
            <input type={"radio"} name={"leavetype"} value={"Unplanned"}></input>
            <label>Planned</label>

            <input type={"radio"} name={"leavetype"} value={"Unplanned"}></input>
            <label>Unplanned</label>

        </div>
        <div>
            <span>Leave duration</span>
            <input type={"radio"} name={"leavetype"}></input>
            <label>Halfday</label>
            <input type={"radio"} name={"leavetype"}></input>
            <label>Fullday</label>
            <input type={"radio"} name={"leavetype"}></input>
            <label>Multiple days</label>
        </div>

        <div>
            <label>From Date:</label>
            <input type={"date"}></input>

            <label>To Date:</label>
            <input type={"date"}></input>

        </div>

        <div>
            <label>Reason for leave</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>

        <div>
            <button>Submit</button>
            <button onClick={()=>{router.push("/dashboard")}}>Back</button>
        </div>
    </div></>)
}