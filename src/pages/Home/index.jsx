import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Title from "@/components/Title";

import styles from "./Home.module.css";

import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get("http://localhost:3000/videos");
            setVideos(response.data);
        };
        fetchVideos();
    }, []);

    return (
        <>
            <Banner imagem={"home"} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return (
                        <Card
                            key={video.id}
                            id={video.id}
                            title={video.titulo}
                            banner={video.capa}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default Home;
