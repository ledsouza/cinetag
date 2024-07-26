import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritos";

export default function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    const { favorites, setFavorites } = useContext(FavoritesContext);

    function toggleFavorite(newFavorite) {
        const repeatedFavorite = favorites.some(
            (favorite) => favorite.id === newFavorite.id
        );

        if (!repeatedFavorite) {
            return setFavorites([...favorites, newFavorite]);
        }

        return setFavorites(
            favorites.filter((favorite) => favorite.id !== newFavorite.id)
        );
    }

    return {
        favorites,
        toggleFavorite,
    };
}
