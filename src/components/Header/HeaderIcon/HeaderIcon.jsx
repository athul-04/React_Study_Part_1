import "./HeaderIcon.css"


const HeaderIcon = ({ Icon,children }) => {
  return (
    <div className="header-icon">
      <Icon size={24} className="items" />
      <span className="items">{children}</span>
    </div>
  );
};

export default HeaderIcon;
