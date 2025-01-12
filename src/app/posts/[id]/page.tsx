
import { Post } from '@/utils/types';
import styles from "./single-post.module.css";

interface SinglePostProps {
    params: Promise<{id: string}>
}

const SinglePost = async ({ params } : SinglePostProps) => {
    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
        throw Error("Failled to fetch post");
    }

    const post : Post = await response.json();

    return (
        <article className={styles["single-post"]}>
            <h3 className={styles["post-title"]}>{post.title}</h3>
            <span className={styles["post-date"]}>{"01/01/2025"}</span>
            <p className={styles["post-body"]}>{post.body}</p>
        </article>
    )

}

export default SinglePost
