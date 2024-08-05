import { useParams } from "react-router-dom";

import styles from "./Player.module.css";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";
import axios from "axios";

function Player() {
    const params = useParams();
    const [video, setVideo] = useState();

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get(
                `http://localhost:3000/videos?id=${params.id}`
            );
            setVideo(response.data[0]);
        };
        fetchVideos();
    }, [params.id]);

    if (!video) {
        return <NotFound />;
    }

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
