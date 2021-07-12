import AboutMe from "./AboutMe"
import FormContact from "./FormContact"
import Header from "./Header"
import MyProyects from "./MyProyects"
import SkillsBarProgress from "./SkillsBarProgress"



const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <SkillsBarProgress />
      <MyProyects />
      <FormContact />
    </div>
  );
}



export default App;