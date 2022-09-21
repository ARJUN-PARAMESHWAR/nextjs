import { useRouter } from "next/router"

export default function Onepsaccess(){
    const router = useRouter();

    return(<>
    <div>
        <h1>1PS Access</h1>
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
            <label for="access">Access needed for</label>
           <select name="access">
            <optgroup label="Choose">
            <option>AWS</option>
            <option>Bit Bucket</option>
            <option>Hasura</option>
            <option>Taiga</option>
            <option>Grafana</option>
            <option>PostgreSQL</option>
            <option>VPN</option>
            <option>Others</option>
            </optgroup>

           </select>
        </div>
        <div>
            <button>Submit</button>
            <button onClick={()=>{router.push("/dashboard")}}>Back</button>

        </div>
    </div></>)
}