import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartaPersonaje = ({ id, name, gender, haircolor, eyecolor }) => {
    const { store, actions } = useContext(Context);

    // Función para agregar o eliminar de favoritos
    function manejarFavoritos() {
        if (store.favoritos.includes(name)) {
            actions.eliminarFavoritos(name);
        } else {
            actions.añadirFavoritos(name);
        }
    }

    // Función para manejar el error de carga de la imagen
    const handleImageError = (e) => {
        e.target.src = "https://pbs.twimg.com/media/CqAE488UAAAeoX7?format=jpg&name=900x900"; // URL de imagen de respaldo
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cartapersonajes" style={{ width: "430px" }}>
                    <div className="m-2 mb-0 border-3 rounded">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            className="card-img-top"
                            alt={name}
                            onError={handleImageError} // Manejo del error de carga de la imagen
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4">{name}</h5>
                            <p className="card-text text-center my-0">Gender: {gender}</p>
                            <p className="card-text text-center my-0">Hair Color: {haircolor}</p>
                            <p className="card-text text-center my-0">Eye Color: {eyecolor}</p>
                            <div className="card-body d-flex justify-content-between">
                                <Link to={`/info/characters/${id}`} className="btn btn-outline-info">
                                    ¡Conoce más!
                                </Link>
                                <button 
                                    onClick={manejarFavoritos} 
                                    className={`btn ${store.favoritos.includes(name) ? 'btn-secondary' : 'btn-outline-secondary'}`}>
                                    <i className={store.favoritos.includes(name) ? 'fas fa-heart' : 'far fa-heart'}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};








