
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"


export function Logout()
{
    const navigate = useNavigate();
    function logoutuser()
    {
        localStorage.removeItem("token")
      
            navigate("/signin")
      

    }
    return <div>
          <Button onClick={logoutuser} loading={false} variant="primary" text="Logout"  />
    </div>
}