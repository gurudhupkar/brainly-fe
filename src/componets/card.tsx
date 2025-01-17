import { Shareicon } from "../icons/shareicon";


interface cardprop {
    title: string;
    link: string;
    type: "youtube" | "twitter" | "instagram"

}



export function Card(props: cardprop) {
    return <div>
        <div className=" p-4 bg-white rounded-md  border-gray-200 max-w-72 border min-h-48 min-w-72 ">

            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <Shareicon />
                    </div>
                    {props.title}

                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">

                            <Shareicon />
                        </a>
                    </div>
                    <div className=" text-gray-500">
                        <Shareicon />
                    </div>

                </div>
            </div>
            <div className="pt-4">
                {props.type === "youtube" &&
                    <iframe className="w-full" src={props.link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                    {props.type ==="twitter" &&  <blockquote className="twitter-tweet">
                        <a href="https://twitter.com/DhravyaShah/status/1790076222501797992?ref_src=twsrc%5Etfw">May 13, 2024</a></blockquote>}
          
            </div>

        </div>
    </div>

}

