import { Link } from "react-router-dom";

import HeaderLink from "@/components/HeaderLink";

import logo from "/imagens/logo.png";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to={"./"}>
                <img src={logo} alt="Logo da Cinetag" />
            </Link>
            <nav>
                <HeaderLink url="./">Home</HeaderLink>
                <HeaderLink url="./Favoritos">Favoritos</HeaderLink>
            </nav>
        </header>
    );
}

export default Header;
