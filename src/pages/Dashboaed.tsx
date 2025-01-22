

import { Button } from "../componets/Button"
import { Shareicon} from "../icons/shareicon"
import { Plusicon } from "../icons/plusicon"
import {Card} from "../componets/card"
import { Createcontentmodel } from "../componets/createcontent"
import { useEffect, useState } from "react"
import { Sidebar } from "../componets/sidebar"
import { Usecontent } from "../hooks/usecontent"
import { Logout } from "../componets/logout"
import axios from "axios"
import { Backend_URl } from "../config"


export function DashBoard() {
  const [modelopen , setclosemodel] = useState(false)
  const {content ,refresh} = Usecontent();

  useEffect(()=>{
    refresh();
  },[modelopen])


  
  function copyToClipboard(text:any) {
    navigator.clipboard.writeText(text)
        .then(() => {
           alert('Text copied to clipboard successfully');
        })
        .catch((error) => {
            
           alert ('Error copying text to clipboard:'+ error);
        });
}
  return <div >
    <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
    <Createcontentmodel open={modelopen} onClose={()=>{
      setclosemodel(false)
    }} />
    <div className="flex justify-end gap-4">


   <Button onClick={()=>{
    setclosemodel(true)
   }} variant="primary" text="Add Content"starticon={<Plusicon/>}></Button>
   <Button onClick={async()=>{
    const response= await axios.post (`${Backend_URl}/api/v1/user/share`,{
      share:true
    },{
      headers:{
        "Authorization" : localStorage.getItem("token")
      }
    });
    const shareurl = `http://http://localhost:5173/share/${response.data.hash}`
     copyToClipboard(shareurl);
     
   }} variant="secondary" text="Share-brain" starticon={<Shareicon/>}></Button>
   <Logout />
    </div>
   
   

   <div className="flex gap-4 flex-wrap">
   

   {content.map(({type,title,link})=><Card 
    type={type}
    title={title}
    link ={link} 
    />
   
  
  )}

   </div>
   
   </div>
    
  </div>
}
