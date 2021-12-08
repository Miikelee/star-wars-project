import React, {useContext} from "react";
import {FaHeart} from "react-icons/fa"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = (props) => {
  const {store, actions}= useContext(Context);
    return (
        <div className="pt-5">
        {/* {JSON.stringify(props.data)} */}
        <div className="card" style={props.styles}>
          <img src={props.imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {props.data} </h5>
            <p className="card-text">
              <p><b>Diameter:</b> {props.diameter} </p>
              <p><b>climate:</b> {props.climate} </p>
              <p><b>terrain: </b>{props.terrain} </p>
            </p>
            <Link to={"/infoplanet?nombre=" + props.data + "&climate=" + props.climate + "&diameter=" + props.diameter + "&terrain=" + props.terrain } className="btn btn-outline-primary">Learn More!</Link>
            <button onClick= {() => actions.addFavorite(props.data)} className="btn btn-warning btn-sm float-right"><FaHeart/></button>
            
  
          </div>
        </div>
      </div>
    )
}

export default CardPlanets;
