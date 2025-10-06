 import Nav from './components/Nav/Nav' 
 import Header from './components/Header/Header'
import './App.css'
import SectionPrice from './components/Section-price/Section-price'
import AdvantageSection from '../src/components/AdvantageSection/AdvantageSection'
import AboutSection from './components/AboutSection/AboutSection'

function App({navigation,socialLinks,coursesData,dropboxesData,paragraphs }) {
return (
    <>
      <Nav nav={navigation}/>
      <Header socmedia={socialLinks} />
      <SectionPrice coursesData={coursesData}/>
      <AdvantageSection dropboxesData={dropboxesData}/>
      <AboutSection paragraphs={paragraphs}/>
    </>
  )
}

export default App
