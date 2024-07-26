import { useParams } from "react-router-dom";

import videos from "@/json/db.json";

import styles from "./Player.module.css";
import Banner from "@/components/Banner";
import Title from "@/components/Title";

function Player() {
    const params = useParams();
    const video = videos.find((video) => video.id === Number(params.id));

    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </section>
        </>
    );
}

export default Player;
