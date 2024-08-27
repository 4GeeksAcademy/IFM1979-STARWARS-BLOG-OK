import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar">
			<Link to="/">
				<div className="container-navbar">
     				 <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt="logo" width="80" height="40"/>
  				</div>
			</Link>
      <div className="ml-auto">
  <div className="nav-item dropdown">
    <div
      className="nav-link dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span className="dropdown">Favoritos</span>
      <span className="badge bg-dark">{store.favoritos.length}</span>
    </div>
    <ul className="dropdown-menu dropdown-menu-end">
      {store.favoritos.map((item, index) => (
        <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
          {item}
          <button className="btn btn-light ms-3" onClick={(event) => {
              event.stopPropagation(); // Evitar que el dropdown se cierre
              actions.eliminarFavoritos(item);
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>

    </nav>
	);
};

