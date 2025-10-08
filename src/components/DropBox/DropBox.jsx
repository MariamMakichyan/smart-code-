

function DropBox({ iconClass, title, subtitle, description }) {
  return (
    <li className="dropbox">
      <div className="dropbox-head">
        <div>
          <i className={iconClass}></i>
          <p><span>{title}</span> {subtitle}</p>
        </div>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="dropbox-collapse" style={{ display: "none" }}>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default DropBox;