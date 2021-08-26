import FrontPage from "./components/FrontPageFolder/FrontPage";
import ProjectStack from "./components/ProjectFolder/ProjectStack"
import TechStack from "./components/AboutMeFolder/TechStack"
import ContactMe from "./components/ContactMe"
function App() {
  return <div>
    <FrontPage/>
    <TechStack/>
    <ProjectStack />
    <ContactMe />
  </div>;
}

export default App;
