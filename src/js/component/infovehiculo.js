import React from "react";
import { Link } from "react-router-dom";

export const InfoVehiculo = ({ id, name, model, manufacturer, length, crew, vehicle_class }) => {
    return (
        <div class="container text-center rounded">
            <div class="row">
                <div class="col">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="img-info my-2 rounded" alt={name} style={{ width: "400px" }} />
                </div>
                <div class="col">
                    <h1 className="display-4 mt-5">{name ? name : "Loading..."}</h1>
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea quibusdam voluptatem, perspiciatis illum excepturi nulla corrupti sapiente asperiores voluptate adipisci consequatur non consequuntur nobis alias officiis totam ipsum vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere eligendi ullam quasi, pariatur ex! Aspernatur alias saepe placeat aut fuga labore? Natus dolor placeat earum expedita minus architecto eligendi?</p>
                </div>
            </div>
            <hr/>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h5>Name</h5>
                        <p>{name}</p>                    
                    </div>
                    <div class="col">
                        <h5>Model</h5>
                        <p>{model}</p>  
                    </div>
                    <div class="col">
                        <h5>Manufacturer</h5>
                        <p>{manufacturer}</p> 
                    </div>
                    <div class="col">
                        <h5>Length</h5>
                        <p>{length}</p> 
                    </div>
                    <div class="col">
                        <h5>Crew</h5>
                        <p>{crew}</p> 
                    </div>
                    <div class="col">
                        <h5>Vehicle Class</h5>
                        <p>{vehicle_class}</p> 
                    </div>
                </div>
            </div>
            <hr/>
        <Link to="/">
            <span className="btn mb-4" role="button">
                Regresa a la Lista
            </span>
        </Link>
        </div>
    );
};