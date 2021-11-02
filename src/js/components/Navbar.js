import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from "../store/appContext";
import {FaRegTrashAlt} from "react-icons/fa";

const Navbar = (props) => {

  const {store, actions}= useContext(Context)



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <Link className="navbar-brand" to="/"> <img style={props.estilo} src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png" alt="/" /> </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Favorites {store.favorites.length} 
        </a>
        <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdown">
          {store.favorites.map((item, id) => { 
            
            return  <li className="dropdown-item" href="/#" key = {id}> {item} <button onClick= {() => actions.deleteFavorite(item)} className="btn btn-warning btn-sm float-right"><FaRegTrashAlt/></button></li>
          })}  
        </div>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
  );
};

export default Navbar;

/* 
<ul>
{store.peoples.map((people, index) => {
console.log(index, people.name)
return <li>{people.name} <button onClick={()=> actions.deleteElement(index)}>Eliminar</button></li>
})}
</ul> */

