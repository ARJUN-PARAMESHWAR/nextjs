import { useRouter } from "next/router";
import Pageselector from "../../components/componentselector"
export default function entity(){
  const router = useRouter();
    return(<>{<Pageselector path= {router.asPath}/>}</>)
}