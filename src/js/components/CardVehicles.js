import React, {useContext} from "react";
import {FaHeart} from "react-icons/fa"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = (props) => {
  const {store, actions}= useContext(Context);
    return (
        <div className="pt-5">
        {/* {JSON.stringify(props.data)} */}
        <div className="card" style={props.styles}>
          <img src={props.imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {props.data} </h5>
            <p className="card-text">
              <p><b>Model:</b> {props.model}</p>
              <p><b>cargo capacity:</b> {props.capacity} </p>
              <p><b>vehicle class:</b> {props.class} </p>
            </p>
            <Link to={"/infovehicles?nombre=" + props.data + "&model=" + props.model + "&capacity=" + props.capacity + "&class=" + props.class } className="btn btn-outline-primary">Detalles</Link> 
            <button onClick= {() => actions.addFavorite(props.data)} className="btn btn-warning btn-sm float-right"><FaHeart/></button>
  
          </div>
        </div>
      </div>
    )
}

export default CardVehicles;
