function ButtonMain({ href, text, onClick }) {
  return (
    <a
      href={href}
      className="but-main"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {text}
    </a>
  );
}

export default ButtonMain;

