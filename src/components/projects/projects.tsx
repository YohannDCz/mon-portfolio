import { Header } from '../shared/header'
import { PanelStack } from '../shared/panel-stack';
import { Footer } from '../shared/footer'
import Insight from './insight';
import { SplitScreens } from './splitscreen_project';

function Projects() {

  return (
    <>
      <Header />
      <Insight />
      <SplitScreens />
      <PanelStack />
      <Footer />
    </> 
  )
}

export default Projects