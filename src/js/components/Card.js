import React, {useContext} from "react";
import {FaHeart} from "react-icons/fa"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {store, actions}= useContext(Context);
  return (
    <div className="pt-5">
      {/* {JSON.stringify(props.data)} */}
      <div className="card" style={props.styles}>
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.data} </h5>
          <p className="card-text">
            <p><b>Gender:</b>  {props.genero}</p>
            <p><b>Mass:</b> {props.peso}</p>
            <p><b>Eyes color:</b> {props.eyeColor}</p>
          </p>
          <Link to={"/infopeople?nombre=" + props.data + "&gender=" + props.genero + "&mass=" + props.peso + "&eyeColor=" + props.eyeColor } className="btn btn-outline-primary">Detalles</Link> 
            <button onClick= {() => actions.addFavorite(props.data)} className="btn btn-warning btn-sm float-right"><FaHeart/></button>

        </div>
      </div>
    </div>
  );
};

export default Card; /* <FontAwesomeIcon icon={faHeart}/>*/
