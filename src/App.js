import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import BlogN from "./components/BlogN";
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";


function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>


{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>
      <Route exact path="/" component={Main}/>
      <Route exact path="/blogN" component={BlogN}/>

    </Switch>
</AnimatePresence>
    </ThemeProvider>
    </>
    
}

export default App

