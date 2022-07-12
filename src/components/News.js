import {useEffect, useState} from "react";
import axios from "axios";

function News() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
            axios.get(`https://example.com/wp-json/wp/v2/posts`)
                .then(res => {
                    if (res.data.length) {
                        setPosts(res.data);
                        setLoading(false);
                    } else {
                        setError('No Posts Found');
                    }
                })
                .catch(err => {
                        setError(err.response.data.message);
                        setLoading(false);
                }
                );
        },
        []
    );

    console.log('posts', posts);

    return (
            <div>
                News
            </div>
    );
}

export default News;