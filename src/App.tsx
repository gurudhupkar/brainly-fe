import { Button } from "./componets/Button"
import { Shareicon} from "./icons/shareicon"
import { Plusicon } from "./icons/plusicon"
import {Card} from "./componets/card"


function App() {
 
  return <div className="p-4">

    <div className="flex justify-end gap-4">


   <Button variant="primary" text="Add Content"starticon={<Plusicon/>}></Button>
   <Button variant="secondary" text="Share-brain" starticon={<Shareicon/>}></Button>
    </div>
   
   

   <div className="flex gap-4">

   <Card type="twitter" link="https://twitter.com/DhravyaShah/status/1790076222501797992?ref_src=twsrc%5Etfw" title="First Post" />
   <Card type="youtube" link="https://www.youtube.com/watch?v=Cs2g2VFWtbo" title="First Video" />

   </div>
   

    
  </div>
}

export default App
