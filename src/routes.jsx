import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Container from "./components/Container";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favoritos" element={<Favorites />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
