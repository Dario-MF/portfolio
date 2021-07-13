import AboutMe from "./AboutMe";
import Footer from "./Footer";
import FormContact from "./FormContact";
import Header from "./Header";
import MyProyects from "./MyProyects";
import SkillsBarProgress from "./SkillsBarProgress";
import SocialBar from "./SocialBar";



const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <SocialBar />
      <SkillsBarProgress />
      <MyProyects />
      <FormContact />
      <Footer />
    </div>
  );
};



export default App;