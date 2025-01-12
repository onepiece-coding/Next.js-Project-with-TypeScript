
import { Post } from "@/utils/types"
import Link from "next/link"
import styles from "./PostItem.module.css";

interface PostItemProps {
    post: Post
}

const PostItem = ({post} : PostItemProps) => {
    return (
        <article className={styles.post}>
            <div className={styles["post-header"]}>
                <h3 className={styles["post-title"]}>
                    {post.title}
                </h3>
            </div>
            <div className={styles["post-body"]}>
                <p className={styles["post-desc"]}>
                    {post.body}
                </p>
            </div>
            <div className={styles["post-footer"]}>
                <Link 
                    href={`/posts/${post.id}`}
                    className="btn"
                    style={{ display: "block" }}
                >
                    Read More
                </Link>
            </div>
        </article>
    )
}

export default PostItem
