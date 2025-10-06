import ButtonMain from "../ButtonMain/ButtonMain";
import SocialLinks from "../Social-links/Social-link";

function Header({ socmedia }) {
  return (
    <header className="header-main">
      <div className="container">
        <div className="header-info">
          <h1>
            <span>Սովորի՛ր</span>
            ծրագրավորում
            <br />
            <span>Դարձի՛ր</span>
            պահանջված մասնագետ
          </h1>
          <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
          <div className="header-action">
            <ButtonMain href="#" text="Սկսե՛լ ուսումը" />
            <a href="#" className="but-play"><i className="far fa-play-circle"></i>Տեսանյութ</a>
          </div>
          <SocialLinks socialLinks={socmedia} />
        </div>
        <img
          src="https://smartcode.am/public/image/header.svg"
          className="header-image"
        />
      </div>
    </header>
  );
}

export default Header;
