
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import CloudHostingImg from "../../../public/cloud-hosting.png";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles["hero-text"]}>
                <h1
                    className={"main-heading"}
                    style={{ marginBottom: "2rem" }}
                >Cloud Hosting</h1>
                <p  className={styles["hero-desc"]}>
                    The best web hosting solution for your online success
                </p>
                <ul className={styles["hero-services"]}>
                    <li className={styles["hero-service"]}>
                        <TiTick /> Easy to use control panel
                    </li>
                    <li className={styles["hero-service"]}>
                        <TiTick /> Secure Hosting
                    </li>
                    <li className={styles["hero-service"]}>
                        <TiTick /> Website Maintenance
                    </li>
                </ul>
            </div>
            <div className={styles["hero-image"]}>
                <Image 
                    src={CloudHostingImg}
                    alt="Cloud Hosting"
                    width={400}
                    height={400}
                />
            </div>
        </section>
    )
}

export default Hero
