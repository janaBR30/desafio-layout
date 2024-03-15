//import './styles.css';
import ProductCard from 'components/ProductCard/index';
import ButtonSearchCatalog from 'components/ButtonSearchCatalog';
//import ProductCard from 'components/ProductCard/Index';

const Catalog = () => {
  return (
    <>
      <div>
        <div className="container my-4">
          <div className="row">
            <div className="search-card">
              <div className="button-search">
                <ButtonSearchCatalog />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
