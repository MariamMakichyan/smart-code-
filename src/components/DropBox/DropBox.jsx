

// function DropBox({ iconClass, title, subtitle, description }) {
//   return (
//     <li className="dropbox">
//       <div className="dropbox-head">
//         <div>
//           <i className={iconClass}></i>
//           <p><span>{title}</span> {subtitle}</p>
//         </div>
//         <i className="fas fa-chevron-down"></i>
//       </div>
//       <div className="dropbox-collapse" style={{ display: "none" }}>
//         <p>{description}</p>
//       </div>
//     </li>
//   );
// }

// export default DropBox;
function DropBox({ iconClass, title, subtitle, description, isOpen, onToggle }) {
  return (
    <li className={`dropbox ${isOpen ? "open" : ""}`}>
      <div className="dropbox-head" onClick={onToggle}>
        <div>
          <i className={iconClass}></i>
          <p>
            <span>{title}</span> {subtitle}
          </p>
        </div>
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </div>

      <div
        className="dropbox-collapse"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <p>{description}</p>
      </div>
    </li>
  );
}

export default DropBox;
