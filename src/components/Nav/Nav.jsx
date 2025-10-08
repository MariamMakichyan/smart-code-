import Logo from "../Logo/Logo";
import Navmenu from "../Nav-menu/nav-menu";
import ButtonMain from "../ButtonMain/ButtonMain";


import './Nav.css'

function Nav({nav, onRegisterClick}) {
  return (
    <nav className="navtop">
      <div className="container">
        <Logo />
        <Navmenu  navigation={nav}/>
        <ButtonMain href="" text="Սկսե՛լ ուսումը" onClick={onRegisterClick}  />
      </div>
    </nav>
  );
}
export default Nav;
