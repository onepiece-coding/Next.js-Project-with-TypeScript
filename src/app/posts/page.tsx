
import { Post } from "@/utils/types";
import styles from "./post.module.css";
import PostItem from "@/components/posts/PostItem";

const PostPage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
        throw Error("Failled to fetch posts!");
    }

    const posts : Post[] = await response.json();

    return (
        <>
            <h2 className="main-heading">Our Posts</h2>
            <div className={styles.posts}>{
                posts.map(post => {
                    return <PostItem
                        key={post.id}
                        post={post}
                    />
                })
            }</div>
        </>
    )
}

export default PostPage
