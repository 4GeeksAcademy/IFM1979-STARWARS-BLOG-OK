import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { InfoPersonaje } from "../component/infopersonaje.js";
import { InfoPlaneta } from "../component/infoplaneta.js";
import { InfoVehiculo} from "../component/infovehiculo.js"

export const Info = () => {
    const { store, actions } = useContext(Context);
    const { type, id } = useParams(); 

    useEffect(() => {
        actions.characters();
        actions.planets();
        actions.vehicles();
    }, []);

    
    const entity = type === "characters" ? store.personajes[id - 1] : type === "planets"? store.planetas[id - 1]: store.naves[id - 1];


    return (
        <div>
            {type === "characters" && entity ? (
                <InfoPersonaje
                id={id}
                name={entity.name}
                birthyear={entity.birth_year}
                gender={entity.gender}
                height={entity.height}
                skincolor={entity.skin_color}
                eyecolor={entity.eye_color}
                />
            ) : null}

            {type === "planets" && entity ? (
                <InfoPlaneta
                    id={id}
                    name={entity.name}
                    climate={entity.climate}
                    population={entity.population}
                    orbitalperiod={entity.orbital_period}
                    rotationperiod={entity.rotation_period}
                    diameter={entity.diameter}
                />
            ) : null}

            {type === "starships" && entity ? (
                <InfoVehiculo
                    id={id}
                    name={entity.name}
                    model={entity.model}
                    manufacturer={entity.manufacturer}
                    passangers={entity.passangers}
                />
            ) : null}       
        </div>
    );
};