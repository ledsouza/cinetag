import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FavoritesProvider } from "@/contexts/Favorites";
import { Outlet } from "react-router-dom";

function Default() {
    return (
        <main>
            <Header />
            <Container>
                <FavoritesProvider>
                    <Outlet />
                </FavoritesProvider>
            </Container>
            <Footer />
        </main>
    );
}

export default Default;
