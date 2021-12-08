const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            planets: [],
            peoples: [],
            vehicles: [],
            favorites: [],
            info: {}
            
            
			
		},
		actions: {
            getPlanets: () => {
                
                fetch("https://swapi.dev/api/planets", {
                    method:"GET",
                    headers: {"Content-Type": "application/json"}
                }).then(response => response.json())
                .then(data => setStore({planets: data.results}))
            },
            getPeoples: () => {
                fetch("https://swapi.dev/api/people", {
                    method:"GET",
                    headers: {"Content-Type": "application/json"}
                }).then(response => response.json())
                .then(data => setStore({peoples: data.results}))
            },
            getVehicles: () => {
                fetch("https://swapi.dev/api/vehicles", {
                    method:"GET",
                    headers: {"Content-Type": "application/json"}
                }).then(response => response.json())
                .then(data => setStore({vehicles: data.results}))
            },
            
            addFavorite: (newItem) => {
				const storeCopy = getStore();
                const exist = storeCopy.favorites.includes(newItem)
				const newFavorites = storeCopy.favorites.concat(newItem);
                if (exist) {
                    alert("Ya existe el favorito")
                }else {
                    setStore({favorites: newFavorites});
                }
                
				
			},

            getInfoPlanet: (a) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/planets/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },

            getInfoPeople: (a) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },

            getInfoPeople: (a) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },

            getData: (data) => {
                setStore({ info: data })
            },

            deleteFavorite: (id) => {
                const store = getStore()
                const nuevoArray = store.favorites.filter((item, indice) => {
                return indice !== id 
              }) 
              setStore({favorites: nuevoArray})
             },

             
			 /* deleteFavorite: (item) => {
				const storeCopy = getStore();
                setStore({favorites: storeCopy.favorites.filter((favorite, item) => {
                    if(favorite === item) {
                        console.log("Que estoy comparando" , item)
                        return false
                    }
                    else {
                        return true
                    }
                })}) */

			
			setFavorites: favorites => {
				localStorage.setItem("favorites", JSON.stringify(favorites));
				setStore({ favorites: favorites });
			},
        },
    };  	
};

export default getState;