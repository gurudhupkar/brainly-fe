
import { useState } from "react";
import { Crossicon } from "../icons/crossicon";
import { Input } from "./input";
import { Button } from "./Button";



export function Createcontentmodel({open ,onClose}){

    return <div>
        {open &&<div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="opacity-100 bg-white p-4 rounded">
                   <div className="flex justify-end cursor-pointer">
                    <div onClick={onClose}>
                    <Crossicon  />
                    </div>
                 

                   </div>
                   <div>
                    <Input placeholder={"Title"}  />
                    <Input placeholder= {"Link"} />
                   </div>
                   <div className="flex justify-center">

                   <Button variant="primary" text="submit" />
                   </div>
                </span>
            </div>
        </div> }
        
    </div>


}