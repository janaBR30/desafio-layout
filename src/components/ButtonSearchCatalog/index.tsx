import './styles.css';

const ButtonIconHome = () => {
  return (
    <div className="btn-container">
      <div className="search-field">
        <p>Digite sua busca</p>
      </div>
      <button className="btn-search btn btn-primary btn-icon">
        <p>BUSCAR</p>
      </button>
    </div>
  );
};

export default ButtonIconHome;
