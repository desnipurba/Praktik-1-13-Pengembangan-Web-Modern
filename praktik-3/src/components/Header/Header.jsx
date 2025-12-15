import './Header.css';

const Header = ({ title, subtitle, userName }) => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-left">
          <h1>{title}</h1>
          <small>{subtitle}</small>
        </div>
        <div className="header-right">
          <span className="hello">Halo, {userName}</span>
          <div className="avatar">
            <img src="https://via.placeholder.com/36" alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

