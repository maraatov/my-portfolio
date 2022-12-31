import {AiFillEdit} from "react-icons/ai";
import {BsFillPinMapFill} from "react-icons/bs";
import {BsArchiveFill} from "react-icons/bs";
import {RiTeamFill} from "react-icons/ri";


const data = [
    {
        id: 1, icon: <AiFillEdit/>, title: "UI/UX Design", desc: "Manage HTML projects\n, " +
            "Create online apps.\n" +
            " Assist website visitors\n, " +
            "take .psd files and mockups, and produce CSS code"
    },
    {
        id: 2,
        icon: <BsFillPinMapFill/>,
        title: "Frontend Development",
        desc: "Develope new user-facing features, \n" +
            "determine the structure and design of web pages.\n" +
            "Build reusable codes, \n" +
            "optimize page loading times, \n" +
            "problem-solving skills and flexibility due to the changing technologies"
    },
    {
        id: 3,
        icon: <BsArchiveFill/>,
        title: "Backend Development",
        desc: "My designs are modern and intuitive. use industry-standard rules to make sure your users have fun using your product."
    },
    {
        id: 4,
        icon: <RiTeamFill/>,
        title: "Soft skills",
        desc: "Teamwork is the main thing for me, I am a very hardworking and energetic guy"
    },
]

export default data