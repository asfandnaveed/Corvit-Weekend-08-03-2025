import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="container-fluid bg-img">
        {/* Row 1 */}
        <div className="row">
          <div className="col-4 left-side d-flex flex-column justify-content-center ps-5">
            <div className="heading">Healthy Veg Outlet</div>
            <div className="d-flex border rounded-pill align-items-center justify-content-between w-75 p-1">
              <button className="btn btn-success btn-location">
                <i className="bi bi-geo-alt-fill" />
                Location
                <i className="bi bi-caret-down-fill" />
              </button>
              <div className="text-white">Search</div>
              <div className="btn-search">
                <i className="bi bi-search text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row bg-product">
          <div className="col-3 d-flex align-items-center px-3">
            <img
              src="assets/images/product/1.png"
              alt=""
              className="img-fluid"
              width={140}
            />
            <div>
              <div className="h3 text-white">Sandwich</div>
              <div className="text-white">350 Rs</div>
              <button className="btn btn-secondary btn-sm">Order Now</button>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <img src="assets/images/product/2.png" alt="" />
            <div>
              <div className="h3 text-white">Pizza</div>
              <div className="text-white">1200 Rs</div>
              <button className="btn btn-secondary btn-sm">Order Now</button>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <img src="assets/images/product/3.png" alt="" />
            <div>
              <div className="h3 text-white">Biryani</div>
              <div className="text-white">250 Rs</div>
              <button className="btn btn-secondary btn-sm">Order Now</button>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <img src="assets/images/product/4.png" alt="" />
            <div>
              <div className="h3 text-white">Burger</div>
              <div className="text-white">550 Rs</div>
              <button className="btn btn-secondary btn-sm">Order Now</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
