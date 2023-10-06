import productos from "../data/data";
import Producto from "./Producto";

const Productos = () => {
  return (
    <div className="section">
      <p className="title has-text-centered">Productos</p>
      <div className="is-flex is-flex-wrap-wrap is-justify-content-center is-3" style={{ gap: 10 }}>
        {productos.map((producto) => {
          return <Producto key={producto.id} {...producto} />;
        })}
      </div>
    </div>
  );
};

export default Productos;
