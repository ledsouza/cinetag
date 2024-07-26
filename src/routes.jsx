import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Container from "./components/Container";
import { FavoritesProvider } from "./contexts/Favorites";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favoritos" element={<Favorites />} />
                        <Route path="/:id" element={<Player />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </FavoritesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
