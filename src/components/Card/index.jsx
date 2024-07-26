import styles from "./Card.module.css";
import iconFavorite from "./assets/favorite_inactive.png";

function Card({ id, title, banner }) {
    return (
        <div className={styles.container}>
            <img src={banner} alt={title} className={styles.banner} />
            <h2>{title}</h2>
            <img
                src={iconFavorite}
                alt="Favoritar"
                className={styles.favorite}
            />
        </div>
    );
}

export default Card;
