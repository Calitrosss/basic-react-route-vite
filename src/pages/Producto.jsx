// eslint-disable-next-line react/prop-types
const Producto = ({ title, price, stock, images }) => {
  const [image] = images;

  return (
    <div className="card" style={{ minWidth: 300, maxWidth: 300 }}>
      <header className="card-header">
        <p className="card-header-title" style={{ height: 72 }}>
          {title}
        </p>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} style={{ objectFit: "contain" }} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <span>
            <strong>Precio: </strong>${price}
          </span>
          <br />
          <span>
            <strong>Stock: </strong>
            {stock}
          </span>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Ver Detalle
        </a>
      </footer>
    </div>
  );
};

export default Producto;
