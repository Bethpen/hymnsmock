import Link from 'next/link';
import AddPost from '../components/AddPost';
import PostList from '../components/PostList';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/post", {"cache": "no-store"});

    if(!res.ok) throw new Error("Failed to fetch data");

    return res.json();
}

const Crud = async () => {
const posts = await getData();

  return (
    <div>
        <Link href="/">
            Home
          </Link>
        <h1>
            Todo App
        </h1>

        <AddPost />
        <PostList posts={posts}/>
    </div>
  )
}

export default Crud