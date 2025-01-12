
import Link from 'next/link';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={"/"} className={styles["logo-link"]}>
                    Cloud Hosting
                </Link>
            </div>
            <ul className={styles["nav-links"]}>
                <li className={styles["nav-item"]}>
                    <Link href={"/"} className={styles["nav-link"]}>
                        Home
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link href={"/posts"} className={styles["nav-link"]}>
                        Posts
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
