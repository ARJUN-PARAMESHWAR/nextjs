import { useRouter } from "next/router"

export default function Raiserelease(){
    const router = useRouter();

    return(<>
    <div>
        <h1>1PS release</h1>
        <div>
            <label>Name of the Employee</label>
            <input type={"text"} placeholder={"Enter your answer"}></input>
        </div>
    </div>

    <div>
        <span>Release type</span>
        <input type={"radio"} name={"releasetype"} value={"Patch"}></input>
        <label>Patch</label>

        <input type={"radio"} name={"releasetype"} value={"Sprint"}></input>
        <label>Sprint</label>

    </div>
    <div>
            <label>Implementation date</label>
            <input type={"date"}></input>
    </div>
    <div>
            <label>Demo start time</label>
            <input type={"date"}></input>
    </div>
    <div>
            <label>Demo end time</label>
            <input type={"date"}></input>
    </div>
    <div>
        <span>Implementation region</span>
        <input type={"checkbox"}></input>
        <label>DEV</label>
        <input type={"checkbox"}></input>
        <label>SIT</label>
        <input type={"checkbox"}></input>
        <label>UAT</label>
        <input type={"checkbox"}></input>
        <label>PROD</label>
    </div>

    <div>
        <span>Change area</span>
        <input type={"checkbox"}></input>
        <label>Front end</label>
        <input type={"checkbox"}></input>
        <label>Back end</label>
        <input type={"checkbox"}></input>
        <label>Hasura</label>
    </div>

    <div>
        <span>SPOC 1</span>
        <input type={"text"}></input>
    </div>


    <div>
        <span>SPOC 2</span>
        <input type={"text"}></input>
    </div>

    <div>
        <button>Submit</button>
        <button onClick={()=>{router.push("/dashboard")}}>Back</button>

    </div>
</>)
}