
import { useRef, useState } from "react";
import { Crossicon } from "../icons/crossicon";
import { Input } from "./input";
import { Button } from "./Button";
import axios from "axios";
import { Backend_URl } from "../config";

enum contentype {
    Youtube = "youtube",
    Twitter ="twitter"
}



export function Createcontentmodel({open  ,onClose} :any) {
    const titleref = useRef<HTMLInputElement>();
    const linkref = useRef<HTMLInputElement>();
    const [type , Settype ] = useState(contentype.Youtube)
    async function addcontent()
    {
        const title = titleref.current?.value;
        const link = linkref.current?.value;

        const response = await axios.post(`${Backend_URl}/api/v1/user/content`,{
            link,
            title,
            type
        },{
            headers :{
                "Authorization":localStorage.getItem("token")

            }
        })
        onClose();


    }

    return <div>
        {open &&<div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 bg-gray-50 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="opacity-100 bg-white p-4 rounded">
                   <div className="flex justify-end cursor-pointer">
                    <div onClick={onClose}>
                    <Crossicon  />
                    </div>
                 

                   </div>
                   <div>
                
                    <Input refrence={titleref} placeholder={"Title"}  />
                    <Input refrence={linkref} placeholder= {"Link"} />
                   </div>
                   <div>
                    <div className="flex gap-1 p-4">

                    
                     <Button text="Youtube" variant={type== contentype.Youtube ? "primary":"secondary"} onClick={()=>{
                        Settype(contentype.Youtube)
                     }} />
                     <Button text="Twitter" variant={type== contentype.Twitter ? "primary":"secondary"} onClick={()=>{
                        Settype(contentype.Twitter)
                     }} />
                    </div>
                   </div>
                   <div className="flex justify-center">

                   <Button onClick={addcontent} variant="primary" text="submit" />
                   </div>
                </span>
            </div>
        </div> }
        
    </div>


}