const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
            favoritos: [],
        },
        actions: {
            characters: async () => {
                try {
                    const response = await fetch (`https://swapi.dev/api/people`)

                    let data = await response.json()
                    setStore({personajes: data.results})
                    console.log(data.results)
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            
            planets: async () => {
                try {
                    const response = await fetch (`https://swapi.dev/api/planets`)

                    let data = await response.json()
                    setStore({planetas: data.results})
                    console.log(data.results)
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },

            vehicles: async () => {
                try {
                    const response = await fetch (`https://swapi.dev/api/vehicles/`)

                    let data = await response.json()                     
                       setStore({vehiculos: data.results})
                       console.log(data.results)
                       return true;
                    } catch (error) {
                        console.log(error);
                        return false;
                    }
                },

            añadirFavoritos: (name) => {
                const store = getStore();
                const favoritosActualizados = [...store.favoritos,name]
                setStore({favoritos: favoritosActualizados})
            },
            
            eliminarFavoritos: (name) => {
                const store = getStore();
                const favoritosActualizados = store.favoritos.filter(favorito => favorito !== name);
                setStore({ favoritos: favoritosActualizados });
            },
        }
    };
};

export default getState;