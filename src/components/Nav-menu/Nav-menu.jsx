import "./Nav-menu.css"

function Navmenu({ navigation }) {
  return (
    <ul className="navtop-menu">
      {navigation.map(({names, href }, index) => (
        <li key={index}>
          <a href={href}>{names}</a>
        </li>
      ))}
    </ul>
  );
}

 export default Navmenu


