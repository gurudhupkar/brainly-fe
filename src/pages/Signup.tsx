
import { useRef } from "react"
import { Button } from "../componets/Button"
import {Input } from "../componets/input"
import axios from "axios";
import { Backend_URl } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup ()
{
    const Usernameref = useRef<HTMLInputElement>();
    const Passwordref = useRef<HTMLInputElement>();
    const FirstNameref = useRef<HTMLInputElement>();
    const LastNameref = useRef<HTMLInputElement>();
    const navigate = useNavigate();
     async function signup ()
    {
        const FirstName = FirstNameref.current?.value;
        const LastName = LastNameref.current?.value;
        const email = Usernameref.current?.value;
        const password = Passwordref.current?.value;
        
       const user =await axios.post(Backend_URl + "/api/v1/user/signup" ,{
           
                FirstName ,
                LastName,
                email,
                password

 
        })
        
        if (user.data.Error){
            alert(user.data.msg);
        }
        else{
            navigate("/signin");
        }
        
   
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input refrence={FirstNameref} placeholder ="FirstName" />
            <Input refrence={LastNameref} placeholder ="LastName" />
            <Input refrence={Usernameref} placeholder="Email"/>
            <Input refrence={Passwordref} placeholder ="Password" />
         
         

            <div className="flex justify-center pt-4">
            <Button onClick ={signup}loading={false} variant="primary" text="Signup" fullwideth={true}/>

            </div>
            


        </div>


    </div>
}