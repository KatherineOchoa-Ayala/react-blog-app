import BlogPost from "../components/BlogPost";
import { useState, useEffect } from "react";

function BlogPostsPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
            if(!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            return response.json();
            })
            .then((data) => setPosts(data))
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setError("Oh no! Unable to load blog posts. Please try again later.");
            });
        }, []);

        return (
            <main>
                <h2>My Blog Posts</h2>

                {error && <p role="alert">{error}</p>}

                {posts.map((post) => (
                    <BlogPost
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.body.slice(0, 100) + "..."}
                        author={"User " + post.userId}
                />            
            ))}        
        </main>
    );
}

export default BlogPostsPage;