
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District></District>
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className='container'>
      <h2>Posts: {posts.length} </h2>
      <div className="row row-cols-3">
        {
          posts.map(post => <Post
            post={post}
            key={post.id}
          ></Post>)
        }
      </div>
    </div>

  )
}

function Post(props) {
  const { title, body } = props.post
  return (
    <div >
      <div className='m-2 py-5 px-2 bg-body-secondary h-75'>
        <h3 className='fs-6'>Title: {title}</h3>
        <p className='fst-normal'>Body: {body}</p>
      </div>
    </div>
  )
}



function District() {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div>
      <h4 className='m-4'>Power: {power}</h4>
      <button className="btn btn-warning" onClick={boostPower}>Boost the Power</button>
    </div >
  )
}


export default App;
