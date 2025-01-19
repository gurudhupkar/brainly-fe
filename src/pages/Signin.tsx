

import { Button } from "../componets/Button"
import { Input } from "../componets/input"
import axios from "axios";
import { Backend_URl } from "../config";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export function Signin() {
    const Usernameref = useRef<HTMLInputElement>();
    const Passwordref = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {

        const email = Usernameref.current?.value;
        const password = Passwordref.current?.value;

        const response = await axios.post(Backend_URl + "/api/v1/user/signin", {
             email,
            password
        })
        const jwt= response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
       
        if (response.data.message){
        alert(response.data.message)
        }
      


    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input refrence={Usernameref} placeholder="Username" />
            <Input refrence={Passwordref} placeholder="Password" />

            <div className="flex justify-center pt-4">
                <Button onClick={signin} loading={false} variant="primary" text="Signin" fullwideth={true} />

            </div>



        </div>


    </div>
}