import { Link, Outlet } from "react-router-dom";
import "./main.css"
const Main = () => {
  return (
    <div >
      <nav className="header">
        <div className="logo" >
          <img className="logo" src="https://i.pinimg.com/564x/b6/8e/22/b68e22bd4eab890a9e0945454c45ed73.jpg" alt="" />
        </div>
        <div className="nav-links">
          <ul className="ul" >
            <li className="li">
              <Link to="/">Pokemon</Link>
            </li>
            <li className="li">
              <Link to="/flags">Banderas</Link>
            </li>
            <li className="li">
              <Link to="/youtube">Youtube</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/**esto va a recibir los componentes */}
      <Outlet/>
    </div>
  );
};

export default Main;