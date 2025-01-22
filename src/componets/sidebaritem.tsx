import { ReactElement } from "react";


export function Sideitem({text,icon, onclickpass}:{
    text :string;
    icon:ReactElement
    onclickpass ? :any;
   })
 {
    return <div onClick={()=>onclickpass()}  className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 tranistion-all duration-150">
        <div className="pr-2">
        {icon}
        </div>
        <div >
        {text}
        </div>
       

    </div>
}