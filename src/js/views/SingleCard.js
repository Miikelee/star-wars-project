import React, {useEffect, useContext} from 'react'
import {Context} from '../store/appContext' 
import { useParams } from 'react-router-dom'

const  Singlecard = (props) => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect (()=> {
      console.log(store.peoples[0])
    }, [])
    return (
     <h1> Aqui deberian estar las cartas individuales</h1>
    )
}

export default Singlecard;