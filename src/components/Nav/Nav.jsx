import Logo from "../Logo/Logo";
import Navmenu from "../Nav-menu/nav-menu";
import ButtonMain from "../ButtonMain/ButtonMain";

function Nav({nav}) {
  return (
    <nav className="navtop">
      <div className="container">
        <Logo />
        <Navmenu  navigation={nav}/>
        <ButtonMain href="#" text="Սկսե՛լ ուսումը"  />
      </div>
    </nav>
  );
}
export default Nav;
