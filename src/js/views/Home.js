import React, {useEffect, useContext} from 'react'
import {Context} from '../store/appContext' 
import Card from '../components/Card';
import CardPlanets from '../components/CardPlanets';
import CardVehicles from '../components/CardVehicles';



const Home = () => {
    const {store, actions} = useContext(Context);

    useEffect (()=> {
      actions.getPlanets();
    }, [])

    useEffect (()=> {
        actions.getPeoples();
    }, [])

    useEffect (()=> {
        actions.getVehicles();
    }, [])

    return (
        <div className="container-fluid pt-5 pb-5">
            <p><h1>Planets</h1></p>
            <div className="row scrolling-wrapper row flex-row flex-nowrap">
            {store.planets.map((planet, index) => <div className="col-md-3 col-sm-3"><CardPlanets terrain={planet.terrain} climate={planet.climate} diameter={planet.diameter} data={planet.name} styles={{width:"25rem"}} imagen="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-wars-death-star-earth.jpg" /></div>)}   
        </div>
        <br/>
        <h1>Characters</h1>
            <div className="row scrolling-wrapper row flex-row flex-nowrap">
            {store.peoples.map((people, index) => <div className="col-md-3 col-sm-3"><Card genero={people.gender} peso={people.mass} eyeColor={people.eye_color} data={people.name} styles={{width:"25rem"}} imagen="https://m.elmostrador.cl/media/2016/10/vader.jpg" /></div>)}   
        </div>
        <br/>
        <h1>Vehicles</h1>
            <div className="row scrolling-wrapper row flex-row flex-nowrap">
            {store.vehicles.map((vehicle, index) => <div className="col-md-3 col-sm-3"><CardVehicles model={vehicle.model} capacity={vehicle.cargo_capacity} class={vehicle.vehicle_class} data={vehicle.name} styles={{width:"25rem"}} imagen="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2017/11/interceptor-tie.jpg?itok=wCaksNm6" /></div>)}   
        </div>
        </div>
         
    )
}

export default Home;

/*<div className="row ">
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://i.pinimg.com/736x/27/7a/ee/277aee2822ca301e99b935277fe58887.jpg" /></div>
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://wallpaperaccess.com/full/4779324.jpg"/></div>
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://c.wallhere.com/photos/06/f4/wolf_sky_eyes_muzzle-692397.jpg!d"/></div>
           <div className="col 3"> <Card styles={{width:"15rem"}} imagen="https://www.10wallpaper.com/wallpaper/medium/1808/China_Tibet_tranquil_lake_snow_mountain_sunshine_medium.jpg"/></div>
      </div>*/
