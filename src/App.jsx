 import Nav from './components/Nav/Nav' 
 import Header from './components/Header/Header'
import './App.css'

function App({navigation,socialLinks}) {
return (
    <>
      <Nav nav={navigation}/>
      <Header socmedia={socialLinks} />
    </>
  )
}

export default App
