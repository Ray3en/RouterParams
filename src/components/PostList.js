import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])



    return (
      <div >
        {posts.map(e=> 
            <Link to={`/posts/${e.id}`}>
                <p>{e.title}</p>
            </Link>
        )}
      </div>
    );
  }
  
  export default PostList;
  