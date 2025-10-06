

function DropBox({ iconClass, title, subtitle, children }) {
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
        <p>{children}</p>
      </div>
    </li>
  );
}

export default DropBox;