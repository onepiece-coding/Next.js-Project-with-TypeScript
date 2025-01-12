
"use client";

import Link from "next/link";
import styles from "./error.module.css";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset } : ErrorPageProps) => {
    return (
        <div className={styles["error-container"]}>
            <h2 className={styles["error-title"]}>
                Oops!
            </h2>
            <h3 className={styles["error-sub-title"]}>
                Something Went Wrong!
            </h3>
            <p className={styles["error-desc"]}>
                Error Message: { error.message }
            </p>
            <div className={styles["error-actions"]}>
                <button 
                    className="btn"
                    onClick={() => reset()}
                >Try Again</button>
                <Link
                    href={"/"}
                    className="btn"
                >Go To Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage
