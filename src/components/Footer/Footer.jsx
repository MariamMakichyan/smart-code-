
import SocialLinks from "../Social-links/Social-link";
import CompanyLinks from "../CompanyLinks/CompanyLinks";
import ContactInfo from "../ContactInfo/ContactInfo";

import "../Footer/Footer.css"

function Footer({socialLinks,companyLinks,paymentIcons,contacts}) {
  return (
    <footer className="bg-silver">
      <div className="container">
        <div className="footer-box">
          <a href="/" className="footer-logo" data-scroll="header-main">
            <img src="https://smartcode.am/public/image/logo.png?v=1" alt="Smart Code Logo" title="Smart Code Logo" />
          </a>
          <p>Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված աշխատանք</p>
          <SocialLinks socialLinks={socialLinks}/>
        </div>

        <CompanyLinks companyLinks={companyLinks} paymentIcons={paymentIcons} />
        <ContactInfo contacts={contacts} /> 
      </div>
    </footer>
  );
}

export default Footer;