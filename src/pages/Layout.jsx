import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <section className="hero is-large">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <Outlet />
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
