import React from "react";
import { Link } from "react-router-dom";

export const InfoPlaneta = ({ id, name, climate, population, orbitalperiod, rotationperiod, diameter }) => {
    return (
        <div class="container text-center rounded">
        <div class="row">
            <div class="col">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-info my-2 rounded" alt={name} style={{ width: "400px" }} />
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
                    <h5>Climate</h5>
                    <p>{climate}</p>  
                </div>
                <div class="col">
                    <h5>Population</h5>
                    <p>{population}</p> 
                </div>
                <div class="col">
                    <h5>Orbital period</h5>
                    <p>{orbitalperiod}</p> 
                </div>
                <div class="col">
                    <h5>Rotation period</h5>
                    <p>{rotationperiod}</p> 
                </div>
                <div class="col">
                    <h5>Diameter</h5>
                    <p>{diameter}</p> 
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
  )};