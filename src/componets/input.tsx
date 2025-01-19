
interface inputproos {
  placeholder:string;
  refrence?:any;
}

export function Input (props:inputproos) 
{
    return <div>
        <input  placeholder= {props.placeholder} type={"text"} className="px-4 py-2 rounded m-2 border" ref={props.refrence}  />
    </div>
}