function CompanyLinks({ companyLinks, paymentIcons }) {
  return (
    <div className="footer-box">
      <h2>Ընկերություն</h2>
      <ul className="option-category">
        {companyLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.target ? "_blank" : "_self"}
              data-scroll={link.scroll || undefined}
            >
              {link.label}
            </a>
          </li>
        ))}

        <li className="footer-pay">
          {paymentIcons.map((icon, index) => (
            <a key={index} href="#">
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default CompanyLinks;
