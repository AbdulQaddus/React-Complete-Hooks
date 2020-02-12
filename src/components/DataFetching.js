import React,{useState,useEffect} from 'react'
import axios from "axios"
function DataFetching() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [searchClick,setSearchClick]=useState(1)
    const handleClick=()=>{
        setSearchClick(id)
    }
    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${searchClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[searchClick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            {/* <button type="submit" onClick={()=>setSearch(id)}>Search</button> */}
            <button type="submit" onClick={handleClick}>Search</button>
            <div>{post.title}</div>
            {/* <ul>
            {posts.map(post=>(<li key={post.id}>{post.title}</li>))}
            </ul> */}
        </div>
    )
}

export default DataFetching
