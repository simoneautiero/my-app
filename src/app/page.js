import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero.js";
import NavBar from "./navbar.js";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
}
