import Nameblock from "./NameBlock";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
import ProjectDetails from "./ProjectDetails";
import News from "./News";
import Meetings from "./Meetings";
import ProjectList from "./ProjectList";

function Mentor() {
    return (
        <div>
            <Navbar />
            <Nameblock />
            <ProjectDetails />
            <ProjectList />
            <News />
            <Meetings />
        </div>
    )
}

export default Mentor;