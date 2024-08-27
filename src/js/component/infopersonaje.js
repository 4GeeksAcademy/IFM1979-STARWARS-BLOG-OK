import React from "react";
import { Link } from "react-router-dom";

export const InfoPersonaje = ({ id, name, birthyear, gender, height, skincolor, eyecolor }) => {
    return (
        <div class="container text-center rounded">
            <div class="row">
                <div class="col">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-info my-2 rounded" alt={name} style={{ width: "400px" }} />
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
                        <h5>Birth Year</h5>
                        <p>{birthyear}</p>  
                    </div>
                    <div class="col">
                        <h5>Gender</h5>
                        <p>{gender}</p> 
                    </div>
                    <div class="col">
                        <h5>Height</h5>
                        <p>{height}</p> 
                    </div>
                    <div class="col">
                        <h5>Skin color</h5>
                        <p>{skincolor}</p> 
                    </div>
                    <div class="col">
                        <h5>Eye color</h5>
                        <p>{eyecolor}</p> 
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