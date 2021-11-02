const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            planets: [],
            peoples: [],
            vehicles: [],
            favorites: [],
            
            
			
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
				const newFavorites = storeCopy.favorites.concat(newItem);
                setStore({favorites: newFavorites});
				
			},

            deleteFavorite: (id) => {
                const store = getStore()
                const newFavorites = [...store.favorites];
                newFavorites.splice(id);
                setStore({favorites: newFavorites});

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