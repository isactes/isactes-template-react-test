import BackgroundPage from "./components/background";
import Nav from "./components/nav";
import NavSide from "./components/nav/navSide/index";
import { useState } from "react"; 

function App() {

  const [isSideOpen, setIsSideOpen] = useState(false)

  const toggleSideNav = () => {
    setIsSideOpen(!isSideOpen)
  }



  return (
    <>
        <Nav toggleNav={toggleSideNav}/>
        <NavSide
        isSideNavOpen={isSideOpen}
        toggleSideNav={toggleSideNav}
        />
        <BackgroundPage></BackgroundPage>
    </>
  );
}

export default App;
