import styles from "./Favorites.module.css";

import Banner from "@/components/Banner";
import Title from "@/components/Title";
import { useFavoritesContext } from "@/contexts/Favorites";
import Card from "@/components/Card";

function Favorites() {
    const { favorites } = useFavoritesContext();
    return (
        <>
            <Banner imagem={"favoritos"} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorites.map((favorite) => {
                    return (
                        <Card
                            id={favorite.id}
                            key={favorite.id}
                            title={favorite.title}
                            banner={favorite.banner}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default Favorites;
