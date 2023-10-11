"use client"

import React, { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AddPost = () => {
    const [showModal, setShowModal] = useState(false)
    const [posts, setPosts] = useState({})
    const router = useRouter();

    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setPosts((prevState ) => ({...prevState, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/post', posts).then(res => {
            console.log(res);
        }).catch(err =>{
            console.log(err);
        }).finally(()=> {
            setPosts({});
            setShowModal(false);
            router.refresh();
        })


    }

  return (
    <>
        <button onClick={()=>setShowModal(true)} className='bg-blue-700 p-2 rounded-md'>AddPost</button>
        {showModal && <Modal showModal={showModal} setShowModal={setShowModal}>
            <form className="w-full" onSubmit={handleSubmit}>
                <h1>Add New Post</h1>
                <input 
                    type="text" 
                    name='title'
                    placeholder='Title'
                    className='w-full p-2 my-5'
                    onChange={handlechange}
                    value={posts.title || ''}
                />
                <input 
                    type="text" 
                    name='description'
                    placeholder='Description'
                    className='w-full p-2 my-5'
                    onChange={handlechange}
                    value={posts.description || ''}
                />
                <button type='submit' className='bg-blue-600 rounded-lg p-3'>Submit</button>
            </form>
            </Modal>}
    </>

  )
}

export default AddPost