import React, { useEffect, useContext, Link } from 'react';
import { Context } from '../store/appContext';
import { useLocation } from 'react-router-dom';

function useQuery () {
    return new URLSearchParams(useLocation().search)
  } 

const InfoPlanets = (props) => {

    const {actions } = useContext(Context);
    //const params = useParams();

    useEffect(() => {
        actions.getInfoPlanet();
    })

    const query = useQuery()

    return (
        <div className="p-5 mb-4 bg-light rounded-3 bg-dark mt-5">
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-wars-death-star-earth.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bold text-light">{query.get("nombre")}</h1>
                        <p className="col-md-8 fs-4 text-light">lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className='row text-light mt-3'>
                    <div className="col-md-3">
                        <h3>Diameter:</h3>
                        {query.get("diameter")}
                    </div>
                    <div className="col-md-3">
                        <h3>Climate:</h3>
                        {query.get("climate")}
                    </div>
                    <div className="col-md-3">
                        <h3>Terrain:</h3>
                        {query.get("terrain")}
                    </div>
                </div>
               

            </div>
        </div>
    )
}

export default InfoPlanets;