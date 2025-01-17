import { Button } from "./componets/Button"
import { Shareicon} from "./icons/shareicon"
import { Plusicon } from "./icons/plusicon"


function App() {
 
  return <div>
   
   <Button variant="primary" text="Add Content"starticon={<Plusicon/>}></Button>
   <Button variant="secondary" text="Share-brain" starticon={<Shareicon/>}></Button>

    
  </div>
}

export default App
