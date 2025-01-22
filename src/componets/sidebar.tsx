import axios from "axios";
import { Logo } from "../icons/logo";
import { Twittericon } from "../icons/twittericon";
import { YouTubeicon } from "../icons/youtubeicon";
import { Sideitem } from "./sidebaritem";
import { Backend_URl } from "../config";
import { useEffect, useState } from "react";
import { Usecontent } from "../hooks/usecontent";

export function Sidebar() {
    // const [youtubeContent, setYoutubeContent] = useState([]);
    // const [type, Settype] = useState([]);
    // const { content, refresh, Setcontent } = Usecontent();

    // async function filtercomponent() {
        // const response = await axios.get(`${Backend_URl}/api/v1/user/contents`, {
        //     headers: {
        //         "Authorization": localStorage.getItem("token")
        //     }


        // })
    //     if (response.data.content) {

    //         const filteredContent = response.data.content.filter((item: any) => item.type === "youtube");
    //         setYoutubeContent(filteredContent);
    //         console.log("Filtered YouTube Content:", filteredContent);

    //         Setcontent(youtubeContent)

    //     }

    // }
    const { content, refresh, Setcontent } = Usecontent(); // Using Usecontent hook
    const [youtubeContent, setYoutubeContent] = useState([]); // State for filtered YouTube content

    // Function to filter YouTube content
    async function filterComponent() {
        try {
            const response = await axios.get(`${Backend_URl}/api/v1/user/contents`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });

            if (response.data.content) {
                // Filter content for YouTube type
                const filteredContent = response.data.content.filter(
                    (item: any) => item.type === "youtube"
                );
                setYoutubeContent(filteredContent); // Update YouTube-specific state
                Setcontent(youtubeContent); // Update the global content state in Usecontent
                
                console.log("Filtered YouTube Content:", content);
            }
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    }

    // Ensure the global content state is refreshed when the component mounts
    useEffect(() => {
        refresh();
    }, []);

    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-600">
                <Logo />

            </div>

            Brainly
        </div>

        <div className="pt-8 pl-5">
            <Sideitem text="Twitter" icon={<Twittericon />} />
            <Sideitem onclickpass={() => filterComponent()} text="Youtube" icon={<YouTubeicon />} />
        </div>
    </div>
}