import React, { useEffect, useState } from 'react';

export default function News() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('/wp-json/wp/v2/posts', {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            if(!response.ok) {
                // oups! something went wrong
                return;
            }

            const posts = await response.json();
            setPosts(posts);
        }

        loadPosts();
    }, [])
    return (
        <>
            {posts.map((post, index) => (
                  "post"
            ))}
        </>
    );
}