import './styles.css';

import ProductImg from 'assets/images/product.png';
import ButtonIconCatalog from 'components/ButtonIconCatalog';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Carro-Audi Supra TT vermelho" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </i>
        </p>
        <ButtonIconCatalog />
      </div>
    </div>
  );
};

export default ProductCard;
