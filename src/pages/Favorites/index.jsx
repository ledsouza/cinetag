import Banner from "@/components/Banner";
import styles from "./Favorites.module.css";
import Title from "@/components/Title";

function Favorites() {
    return (
        <>
            <Banner imagem={"favoritos"} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
        </>
    );
}

export default Favorites;
