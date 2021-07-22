import { useEffect, useState } from 'react'
import './HomePage.css'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Posts from '../../Components/Posts/Posts'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
function HomePage() {
    const { search } = useLocation();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            console.log(res)
            setPosts(res.data);
        }
        fetchPosts()
    }, [search])

    return (
        <div>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>

            Homepage
        </div>
    )
}

export default HomePage
