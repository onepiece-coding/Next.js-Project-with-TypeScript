
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={ styles.footer }>
            Copyright &copy; 2024
            { " | " }
            <Link href={"/"} className={ styles["footer-link"] }>
                Cloud Hosting
            </Link>
        </div>
    )
}

export default Footer
