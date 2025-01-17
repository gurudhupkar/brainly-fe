import { ReactElement } from "react";

interface buttonProps{
    variant:"primary" | "secondary";
    text : string;
    starticon : ReactElement;
}
const variantcolor ={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}

const defaultcolors = "px-4 py-2 rounded-md font-light flex items-center"

export function Button (props:buttonProps)
{
    return <button className={variantcolor[props.variant] + " "+ defaultcolors
    }>
        <div className="pr-2">
        {props.starticon}
        </div>
       
        {props.text}
    </button>

}