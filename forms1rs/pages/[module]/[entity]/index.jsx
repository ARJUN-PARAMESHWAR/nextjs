import { useRouter } from "next/router";
import { useEffect } from "react";

export default function entity(){
  const router = useRouter();
    console.log(router.asPath)
    useEffect(()=> router.push("/a/b/demo"), [])
}