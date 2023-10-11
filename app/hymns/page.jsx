import Link from 'next/link';
import AddHymn from '../components/AddHymn';
import HymnList from '../components/HymnList';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/hymns", {"cache": "no-store"});

    if(!res.ok) throw new Error("Failed to fetch data");
  
    return res.json();
}

const Hymn = async () => {
const hymns = await getData();

  return (
    <div>
        <Link href="/">
            Home
          </Link>
        <h1>
            Todo App
        </h1>

        {/* <AddHymn /> */}
        <HymnList hymns={hymns}/>
    </div>
  )
}

export default Hymn