import { Logo } from "../icons/logo";
import { Twittericon } from "../icons/twittericon";
import { YouTubeicon } from "../icons/youtubeicon";
import { Sideitem } from "./sidebaritem";

export function Sidebar (){

    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-600">
            <Logo />

            </div>
       
          Brainly
        </div>
        
        <div className="pt-8 pl-5">
            <Sideitem text="Twitter" icon={<Twittericon />} />
            <Sideitem text="Youtube" icon={<YouTubeicon />} />
        </div>
    </div>
}