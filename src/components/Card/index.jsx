import { useFavoritesContext } from "@/contexts/Favorites";
import styles from "./Card.module.css";
import iconFavoriteInactive from "./assets/favorite_inactive.png";
import iconFavoriteActive from "./assets/favorite_active.png";

function Card({ id, title, banner }) {
    const { favorites, toggleFavorite } = useFavoritesContext();
    const isFavorite = favorites.some((favorite) => favorite.id === id);
    const icon = isFavorite ? iconFavoriteActive : iconFavoriteInactive;

    return (
        <div className={styles.container}>
            <img src={banner} alt={title} className={styles.banner} />
            <h2>{title}</h2>
            <img
                src={icon}
                alt="Favoritar"
                className={styles.favorite}
                onClick={() => toggleFavorite({ id, title, banner })}
            />
        </div>
    );
}

export default Card;
