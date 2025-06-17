import MainAbout from "./MainAbout";
import MainCards from "./MainCards";
import '../Main/MainOrg.css'
const Main = () => {
    return (
        <main className="main">
          <MainAbout/>
          <MainCards/>
        </main>
    );
}

export default Main;