import { Button } from "../componets/Button";
import { Shareicon } from "../icons/shareicon";
import { Plusicon } from "../icons/plusicon";
import { Card } from "../componets/card";
import { Createcontentmodel } from "../componets/createcontent";
import { useEffect, useState } from "react";
import { Sidebar } from "../componets/sidebar";
import { Logout } from "../componets/logout";
import axios from "axios";
import { Backend_URl } from "../config";

export function DashBoard1() {
  const [modelopen, setclosemodel] = useState(false);
  const [content, setContent] = useState([]);
 
  const [error, setError] = useState();

  useEffect(() => {
    
    const fetchdata = async ()=>{
      try{
        const url = window.location.pathname.split("/")[2];
        const response = await axios.get (`${Backend_URl}/api/v1/user/share/${url}`);
        
        console.log(response.data);
        if(response.data.success)
        {
          setContent(response.data.content)
        }
        else {
          setError(response.data.message);
        }


      }
      catch (err){
        console.error(error);
        setError(error);

      }
    }
   fetchdata();
   


  }, []);

  return  <div >
  <Sidebar />
  <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
  <Createcontentmodel open={modelopen} onClose={()=>{
    setclosemodel(false)
  }} />
  <div className="flex justify-end gap-4">


 <Button onClick={()=>{
  setclosemodel(true)
 }} variant="primary" text="Add Content"starticon={<Plusicon/>}></Button>
 <Button variant="secondary" text="Share-brain" starticon={<Shareicon/>}></Button>
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
