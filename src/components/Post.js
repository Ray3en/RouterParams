import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Post() {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(()=> {
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])
        
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {post.id}
      </div>
    );
  }
  
  export default Post;
  