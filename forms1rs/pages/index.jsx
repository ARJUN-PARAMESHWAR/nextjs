import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"

export default function Loginpage(){
  var keys = "";
  var values ="";
  const router = useRouter();
 
  const Credcheck=()=>{
 
   if(keys.length >= 5 && values.length >=8)
   {
       let element = document.getElementById("Username");
       let Username = element.value;
       alert (`Welcome ${Username}`)
       router.push("/dashboard")
   }
 
   else{
     alert("Please enter valid Username and Password")
   } 
   }
 
  function Inputfields(event){
   keys = event.target.name;
   values = event.target.value;
   
 }
   return (
     <>
       <div className={styles.box1}>
         <div className={styles.box2}>
           <h1>Welcome to the LoginPage!</h1>
           <div>
             <input id={"Username"}onChange={Inputfields} type={"text"} placeholder={"Username"} name="Username"></input>
             <input  onChange={Inputfields}  type={"password"} placeholder={"Password"} name="Password"></input>
             <button className ={styles.loginbutton} onClick={Credcheck}>Login</button>
           </div>
       </div>
       </div>
     </>
   )
}

