import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CartaPersonaje } from "../component/cartapersonaje.js";
import { CartaPlaneta } from "../component/cartaplaneta.js";
import { CartaVehiculo } from "../component/cartavehiculo.js";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.characters();
        actions.planets();
        actions.vehicles();
    }, []);

    return (
        <div>

            <h1 className="text-start ms-4">Personajes</h1>
            <div className="contenedor-tarjetas container-fluid">
                <div className="d-flex overflow-auto mb-5">
                    {store.personajes.map((item, index) => (
                        <CartaPersonaje
                            key={index}
                            id={index +1}
                            name={item.name}
                            gender={item.gender}
                            haircolor={item.hair_color}
                            eyecolor={item.eye_color}
                        />
                    ))}
                </div>
            </div>


            <h1 className="text-start ms-4">Planetas</h1>
            <div className="contenedor-tarjetas container-fluid">
                <div className="d-flex overflow-auto mb-5">
                    {store.planetas.map((item, index) => (
                        <CartaPlaneta
                            key={index}
                            id={index +1}
                            name={item.name}
                            population={item.population}
                            terrain={item.terrain}
                        />
                    ))}
                </div>
            </div>

            
            <h1 className="text-start ms-4">Vehículos</h1>
            <div className="contenedor-tarjetas container-fluid">
                <div className="d-flex overflow-auto mb-5">
                    {store.vehiculos.map((item, index) => (
                        <CartaVehiculo
                            key={index}
                            id={index +1}
                            name={item.name}
                            population={item.model}
                            manufacturer={item.manufacturer}
                            passengers={item.passengers}
                        />
                    ))}
                </div>    
            </div>
        </div>    
    );
};