import { icons } from "../../Db/data";

function ContactInfo({ contacts }) {
  return (
    <div className="footer-box">
      <h2>Կապ մեզ հետ</h2>
      <ul className="contact-info">
        {contacts.map((contact, index) => (
          <li key={index}>
            <a
              href={contact.href}
              target={contact.type === "location" ? "_blank" : undefined}
              rel={
                contact.type === "location" ? "noopener noreferrer" : undefined
              }
            >
              <i className={icons[contact.type]}></i> {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
