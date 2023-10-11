"use client"

import { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { useRouter } from "next/navigation"


const Hymns= ({hymn}) => {
    const [showModal, setShowModal] = useState(false)
    const [editHymn, setEditHymn] = useState(hymn);
    const router = useRouter

    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setEditHymn((prevState ) => ({...prevState, [name]: value}))
    }
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.patch(`/api/hymn/${hymn.id}`, editHymn).then(res => {
            console.log(res);
        }).catch(err =>{
            console.log(err);
        }).finally(()=> {
            setShowModal(false);
            router.refresh();
        })
    }

    const handleDelete = async (e) => {
        await axios.delete(`/api/hymn/${hymn.id}`).then(res => {
            console.log(res);
        }).catch(err =>{
            console.log(err);
        }).finally(()=> {
            setShowModal(false);
            router.refresh();
        })
    }


  return (
    <div className='container w-fit px-5 py-2 rounded-lg bg-orange-100'>
        <h1 className="mb-7 font-bold">{hymn.title}</h1>
        {hymn.verses.map(verse=> <pre className="mb-5">{verse}</pre>)}
        <div className='mt-3 flex gap-2 hidden'>
            <button onClick={()=>setShowModal(true)} className='bg-green-300 text-sm p-2 rounded-md'>Edit</button>
            <button onClick={handleDelete} className='bg-red-400 p-2 text-sm rounded-md'>Delete</button>
        </div>

        {
            showModal && <Modal showModal={showModal} setShowModal={setShowModal}>
            <form className="w-full" onSubmit={handleSubmit}>
                <h1>Add New Hymn</h1>
                <input 
                    type="text" 
                    name='title'
                    placeholder='Title'
                    className='w-full p-2 my-5'
                    onChange={handlechange}
                    value={editHymn.title || ''}
                />
                <input 
                    type="text" 
                    name='description'
                    placeholder='Description'
                    className='w-full p-2 my-5'
                    onChange={handlechange}
                    value={editHymn.description || ''}
                />
                <button type='submit' className='bg-blue-600 rounded-lg p-3'>Submit</button>
            </form>
            </Modal> 
        }
    </div>
  )
}

export default Hymns