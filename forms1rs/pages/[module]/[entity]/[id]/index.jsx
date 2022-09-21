import { useRouter } from "next/router";
import { useEffect } from "react";
import Pageselector from "../../../../components/componentselector"
export default function entity(){
  const router = useRouter();
    return(<>{<Pageselector path= {router.asPath}/>}</>)
}