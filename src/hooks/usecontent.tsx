import { useEffect, useState } from "react";
import { Backend_URl } from "../config";
import axios from "axios";


export function Usecontent()
{
    const [content,Setcontent] = useState([])
    const [loading,setLoading] = useState(false)

   async function refresh()
   {
   
        try{
            const response =await axios.get(`${Backend_URl}/api/v1/user/contents`,{
                headers:{
                    'Authorization':localStorage.getItem("token")
                }
            });
            if(response.data.content)
            {
                console.log(response.data.content);
                Setcontent(response.data.content);
            }
            else if(response.data.error){
                console.log(response.data.error)

            }
            else{
                alert("content not found")
            }
        }
        catch (error)
        {
            console.log("Error" + error)
        }
    }
    // useEffect(()=>{
    //     refresh();
    //    let interval= setInterval(()=>{
    //         refresh();
    //     },5000)
    //      return ()=>{
    //         clearInterval(interval)

    //      }
    // },[])
    return {content , refresh, Setcontent, loading,setLoading}
   }

  
   
