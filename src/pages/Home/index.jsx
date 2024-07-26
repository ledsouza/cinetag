import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";

import styles from "./Home.module.css";

import videos from "@/json/db.json";

function Home() {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
}

export default Home;
