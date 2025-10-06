 import Nav from './components/Nav/Nav' 
 import Header from './components/Header/Header'
import './App.css'

function App({navigation}) {
return (
    <>
      <Nav nav={navigation}/>
      <Header />
    </>
  )
}

export default App
